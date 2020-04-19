import Phaser from 'phaser';
export class Entity {

    scene;

    position;
    sprite;
    sensors = {
        bottom: null,
        left: null,
        right: null,
        up: null,
    };
    currentJump = 0;

    constructor(scene, position, key, collisionCategory) {
        this.scene = scene;
        this.position = position;
        this.sprite = this.createMatterSprite(key);
        this.collisionCategory = collisionCategory;
    }

    createMatterSprite(key) {
        const sprite = this.scene.matter.add.sprite(this.position.x, this.position.y, key)
        const width = sprite.width;
        const height = sprite.height;

        const body = this.scene.matter.bodies.rectangle(0, 0, width, height);

        this.sensors.bottom = this.scene.matter.bodies.rectangle(0, 9, 1, 1, { isSensor: true });
        this.sensors.up = this.scene.matter.bodies.rectangle(0, -9, 1, 1, { isSensor: true });

        this.sensors.left = this.scene.matter.bodies.rectangle(-9, 0, 1, 1, { isSensor: true });
        this.sensors.right = this.scene.matter.bodies.rectangle(9, 0, 1, 1, { isSensor: true });

        var compoundBody = this.scene.matter.body.create({
            parts: [body, this.sensors.bottom, this.sensors.up, this.sensors.left, this.sensors.right],
            // restitution: 0.05,
        });

        sprite.setExistingBody(compoundBody).setPosition(this.position.x, this.position.y);

        Object.keys(this.sensors).forEach(key => {
            this.sensors[key].touching = 0;
        })

        Object.keys(this.sensors).forEach(key => {
            this.scene.matterCollision.addOnCollideStart({
                objectA: this.sensors[key],
                callback: () => { this.sensors[key].touching++ }
            });

            this.scene.matterCollision.addOnCollideEnd({
                objectA: this.sensors[key],
                callback: () => { this.sensors[key].touching-- }
            });
        })

        this.scene.matterCollision.addOnCollideStart({
            objectA: this.sensors.bottom,
            callback: () => { this.currentJump = 0 }
        });

        return sprite;
    }

    turnLeft() {
        this.sprite.flipY = true;
    }

    turnRight() {
        this.sprite.flipY = false;
    }

    collideUp() { this.onGround = false; }
    collideDown() { this.onGround = true; }

    mouseIsOnLeftSide = () => {
        return this.scene.input.mousePointer.x <= this.player.x;
    }

    pointTo = (spriteFrom, spriteTo) => {
        return Phaser.Math.Angle.BetweenPoints(spriteFrom, spriteTo);
    }


    getVelocity = (position1, position2, magnitude) => {
        const deltaX = position1.x - position2.x;
        const deltaY = position1.y - position2.y;

        const angle = Math.atan2(deltaX, deltaY);

        const position = {
            x: Math.cos(angle) * magnitude,
            y: Math.sin(angle) * magnitude
        }

        return position;
    }

    getPosition = (object) => ({ x: object.x, y: object.y })

}