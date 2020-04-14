import { Entity } from "./entity.model";


export class MovableEntity extends Entity {
    constructor(scene, position, key) {
        super(scene, position, key);
    }

    moveLeft = () => { this.sprite.setVelocityX(-2.5); }
    moveRight = () => { this.sprite.setVelocityX(2.5); }
    jump = () => { this.sprite.setVelocityY(-5); }

    stop = () => { this.sprite.setVelocityX(0); }
}