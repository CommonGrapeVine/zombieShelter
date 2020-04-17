import { MovableEntity } from "./movableEntity.model";
import { Bullet } from "./bullet.model";

export class Weapon extends MovableEntity {

    player;
    fireLocation;

    shelEmitter;

    constructor(scene, position, key, collisionCategory, player) {
        super(scene, position, key, collisionCategory);
        this.player = player;
        this.create();
        scene.input.on('pointerdown', this.shootBullet);
    }

    create() {
        const particles = this.scene.add.particles('bullet');
        this.shelEmitter = particles.createEmitter({
            // angle: { min: 180 + 45, max: 180 + 90 + 45 },
            // speed: 100,
            // gravityY: 400,
            lifespan: 4000,
            quantity: 0,
            deathZone: {
                type: 'onEnter', source: {
                    contains: (e) => {
                        console.log(e);
                    }
                }
            }
            // deathCallback: (e) => {
            //     // const shell = new Unit(this.scene, 'shell', -1).create({ x: e.x, y: e.y });
            //     // shell.sprite.setCollisionGroup(-1);
            //     // shell.sprite.setCollisionCategory(0);
            //     // shell.sprite.setCollisionCategory(-1);
            // }
        });
    }

    createMatterSprite(key) {
        const sprite = this.scene.matter.add.sprite(this.position.x, this.position.y, key)
        const width = sprite.width;
        const height = sprite.height;

        const body = this.scene.matter.bodies.rectangle(0, 0, width, height / 2);
        this.fireLocation = this.scene.matter.bodies.rectangle(width - 5, 0, 5, 5);

        var compoundBody = this.scene.matter.body.create({
            collisionFilter: {
                category: this.collisionCategory,
                group: 1,
                mask: 1,
            },
            parts: [body, this.fireLocation],
        });

        sprite.setExistingBody(compoundBody);
        return sprite;
    }

    update() {
        this.sprite.setPosition(this.player.x, this.player.y);
        this.mouseIsOnLeftSide() ? this.turnLeft() : this.turnRight();
        this.sprite.setRotation(this.pointTo(this.sprite, this.scene.input.mousePointer));
    }

    shootBullet = (pointer) => {
        // const bullet = new Unit(this.scene, 'bullet', this.bulletCollisionCategory);

        const particle = this.shelEmitter.emitParticleAt(this.sprite.x, this.sprite.y, 1);
        console.log(particle);
        const vectorVeocity = this.getVelocity(
            this.getPosition(this.fireLocation),
            this.getPosition(this.sprite),
            10);

        // particle.velocityX = vectorVeocity.y;
        // particle.velocityX = vectorVeocity.y;
        particle.velocityX = 150;
        particle.rotation = 90;
        // bullet.create({ x: this.weaponBody.position.x, y: this.weaponBody.position.y });
        // bullet.sprite.setAngle(this.sprite.angle);
        // bullet.sprite.body.label = 'bullet';
        // bullet.sprite.setBounce(1);
        // const vectorVeocity = getVelocity(
        //     getPosition(bullet.sprite),
        //     getPosition(this.sprite),
        //     10);
        // (bullet.sprite.setFriction(0, 0))
        //     .setVelocity(vectorVeocity.y, vectorVeocity.x);

        // this.scene.matterCollision.addOnCollideStart({
        //     objectA: bullet.sprite,
        //     callback: (eventData) => {
        //         const { bodyA, bodyB } = eventData;
        //         var bodyBounce;
        //         if (bodyA.label === 'wall')
        //             bodyBounce = bodyB;
        //         else
        //             bodyBounce = bodyA;

        //         if (bodyA.label === 'wall' || bodyB.label === 'wall') {
        //             bodyBounce.bounces === undefined && (() => {
        //                 console.log('bounces');
        //                 bodyBounce.bounces = 1;
        //             })()
        //             if (this.maxBounces === bodyBounce.bounces) {
        //                 const bulletHitAnimation = new Unit(this.scene, 'bulletHit');
        //                 bulletHitAnimation.create({ x: bodyBounce.position.x, y: bodyBounce.position.y });
        //                 loadAnimations(this.scene, bulletHitAnimation.sprite, bulletAnimation);
        //                 playAnimation(bulletHitAnimation.sprite, 'bullet_hit');
        //                 bullet.sprite.destroy();
        //                 bulletHitAnimation.sprite.setCollisionGroup(-1);
        //                 bulletHitAnimation.sprite.setCollisionCategory(0);
        //             }
        //             bodyBounce.bounces > 0 && (() => {
        //                 console.log('bounces2');
        //                 bodyBounce.bounces++;
        //             })()
        //             // bulletHitAnimation.sprite.destroy();
        //         }
        //     },
        //     context: this // Context to apply to the callback function
        // });
    }
}