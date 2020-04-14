import Phaser from "phaser"
import { gameSize } from "../globals";
import { Player } from "../models/player.model";
class MainScene extends Phaser.Scene {

    player;

    preload() {
        this.load.image("player", "assets/player.png");
    }

    create() {
        this.matter.world.setBounds(0, 0, gameSize.width, gameSize.height);
        this.player = new Player(this, { x: 0, y: 0 }, 'player');
    }

    update() {
        this.player.update();
    }
}
export const mainScene = new MainScene("mainScene");
