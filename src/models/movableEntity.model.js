import { Entity } from "./entity.model";


export class MovableEntity extends Entity {

    velocity = 2.5;

    moveLeft = () => { this.sprite.setVelocityX(-this.velocity); }
    moveRight = () => { this.sprite.setVelocityX(this.velocity); }
    // jump(){ this.sprite.applyForce({x: 0, y: -0.005}); }
    jump(){ this.sprite.setVelocityY(-this.velocity * 2); }

    stop = () => {  }

    canJump = () => this.currentJump < this.maxJumps || this.sprite.body.velocity.y === 0;
}