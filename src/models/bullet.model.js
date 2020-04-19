import { MovableEntity } from "./movableEntity.model";

export class Bullet extends MovableEntity {
  bulletDestiny;
  constructor(scene, bulletOrigin, bulletDestiny, key, collisionCategory) {
    super(scene, bulletOrigin, key, collisionCategory);  
    this.bulletDestiny = bulletDestiny;
}
  createMatterSprite(key) {
    const sprite = this.scene.matter.add.sprite(
      this.position.x,
      this.position.y,
      key
    );
    const width = sprite.width;
    const height = sprite.height;

    const body = this.scene.matter.bodies.rectangle(0,0,  width, height);
    var compoundBody = this.scene.matter.body.create({
      collisionFilter: {
        category: this.collisionCategory,
        group: 1,
        mask: 1,
      },
      parts: [body],
    });

    sprite.setExistingBody(compoundBody).setPosition(this.position.x,this.position.y);
    return sprite;
  }
}
