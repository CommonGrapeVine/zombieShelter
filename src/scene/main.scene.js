import Phaser from "phaser"
import { gameSize, controlKeys } from "../globals";

import { ControlService } from "../services/control.service";
class MainScene extends Phaser.Scene {
    keyD;
    keyA;
    player;
    controls;
    preload() {
        this.load.image("player","assets/player.png")
    }
    create() {
        this.controls = new ControlService(this, controlKeys).controls;
        this.matter.world.setBounds(0,0,gameSize.width, gameSize.height);
        this.player = this.matter.add.sprite(0,0, "player");
        this.player.setFixedRotation(0);
    }
    update() {
        if(this.controls.left.isDown){
            this.player.setVelocityX(-1);
        }
        if(this.controls.right.isDown){
            this.player.setVelocityX(1);
        }
    }
}
 export const mainScene = new MainScene("mainScene");