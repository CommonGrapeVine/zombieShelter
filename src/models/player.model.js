import { MovableEntity } from "./movableEntity.model";
import { ControlService } from "../services/control.service";
import { controlKeys } from "../globals";
import { Weapon } from "./weapon.model";

export class Player extends MovableEntity {

    controlsService;

    maxJumps = 2;
    lastJump = 0;
    currentJump = 0;
    weapon;

    constructor(scene, position, key) {
        super(scene, position, key);
        this.controlsService = new ControlService(scene, controlKeys);
        this.sprite.setFixedRotation(0).setFriction(0).setFrictionAir(0);
        this.weapon = new Weapon(scene, { x: 0, y: 0 }, 'weapon', this.collisionCategory, this.sprite);
    }

    update = (time, delta) => {
        this.controlsService.isKeyDown('left') && !this.sensors.left.touching && this.moveLeft();
        this.controlsService.isKeyDown('right') && !this.sensors.right.touching && this.moveRight();
        this.controlsService.isKeyDown('up') && this.jump(time);

        if (!this.controlsService.isKeyDown('left') && !this.controlsService.isKeyDown('right')) this.stop();

        this.sprite.body.velocity.y === 0 && (this.currentJump = 0);
        this.weapon.update();
    }

    jump(time) {
        if (this.canJump(time)) {
            super.jump();
            this.lastJump = time;
            this.currentJump++;
        }
    }

    stop = () => { this.sprite.setVelocityX(0); }

    canJump = (time) => {
        return time - this.lastJump > 250
            && (this.currentJump < this.maxJumps || this.onGround)
    };
}