import { MovableEntity } from "./movableEntity.model";

export class Bullet extends MovableEntity {
  createMatterSprite(key) {
    const sprite = this.scene.matter.add.sprite(
      this.position.x,
      this.position.y,
      key
    );
    const width = sprite.width;
    const height = sprite.height;

    const body = this.scene.matter.bodieds.rectangle(0, 0, width, height / 2);

    var compoundBody = this.scene.matter.body.create({
      collisionFilter: {
        category: this.collisionCategory,
        group: 1,
        mask: 1,
      },
      parts: [body],
    });

    sprite.setExistingBody(compoundBody);
    return sprite;
  }
}
