import Phaser from "phaser"
class MainScene extends Phaser.Scene {
    preload() {
        this.load.image("player","assets/player.png")
    }
    create() {
        this.matter.add.image(0,0, "player")
    }
    update() {

    }
}
 export const mainScene = new MainScene("mainScene");