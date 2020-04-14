import { MovableEntity } from "./movableEntity.model";
import { ControlService } from "../services/control.service";
import { controlKeys } from "../globals";

export class Player extends MovableEntity {

    controlsService;

    constructor(scene, position, key) {
        super(scene, position, key);
        this.controlsService = new ControlService(scene, controlKeys);
        this.sprite.setFixedRotation(0).setFriction(0).setFrictionAir(0);
    }

    update = () => {
        this.controlsService.isKeyDown('left') && this.moveLeft();
        this.controlsService.isKeyDown('right') && this.moveRight();
        this.controlsService.isKeyDown('up') && this.jump();

        if (!this.controlsService.isKeyDown('left') && !this.controlsService.isKeyDown('right')) this.stop();
    }
}