import { MovableEntity } from "./movableEntity.model";
import { Bullet } from "./bullet.model";

export class Weapon extends MovableEntity {
  player;
  fireLocation;

  constructor(scene, position, key, collisionCategory, player) {
    super(scene, position, key, collisionCategory);
    this.player = player;
    this.create();
    scene.input.on("pointerdown", this.shootBullet);
  }

  create() {}

  createMatterSprite(key) {
    const sprite = this.scene.matter.add.sprite(
      this.position.x,
      this.position.y,
      key
    );
    const width = sprite.width;
    const height = sprite.height;

    const body = this.scene.matter.bodies.rectangle(0, 0, width, height);
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
    this.sprite.setRotation(
      this.pointTo(this.sprite, this.scene.input.mousePointer)
    );
  }

  shootBullet = (pointer) => {
    const bullet = new Bullet(this.scene, this.fireLocation.position, pointer.position ,'bullet', this.bulletCollisionCategory);
  };
}
