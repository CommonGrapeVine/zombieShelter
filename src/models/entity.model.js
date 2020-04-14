
export class Entity {

    sprite;
    position;
    scene;

    constructor(scene, position, key) {
        this.scene = scene;
        this.position = position;
        this.sprite = scene.matter.add.sprite(position.x, position.y, key);
    }
}