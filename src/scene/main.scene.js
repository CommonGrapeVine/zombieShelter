import Phaser from "phaser"
import { gameSize } from "../globals";
class MainScene extends Phaser.Scene {
    keyD;
    keyA;
    player;
    preload() {
        this.load.image("player","assets/player.png")
    }
    create() {
        this.matter.world.setBounds(0,0,gameSize.width, gameSize.height);
        this.player = this.matter.add.sprite(0,0, "player");
        this.player.setFixedRotation(0);
        this.keyD = this.input.keyboard.addKey("d");
        this.keyA = this.input.keyboard.addKey("a");
    }
    update() {
        if(this.keyD.isDown){
            this.player.setVelocityX(1);
        }
        if(this.keyA.isDown){
            this.player.setVelocityX(-1);
        }
    }
}
 export const mainScene = new MainScene("mainScene");