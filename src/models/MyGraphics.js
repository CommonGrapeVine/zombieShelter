import Phaser from "phaser";
 
export class MyGraphics extends Phaser.GameObjects.Graphics {
    constructor(scene, options) {
        super(scene, options);
        scene.add.existing(this);
    }
}