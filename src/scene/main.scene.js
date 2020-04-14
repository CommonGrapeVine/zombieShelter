import Phaser from "phaser"
import { gameSize, controlKeys } from "../globals";

import { ControlService } from "../services/control.service";
class MainScene extends Phaser.Scene {

    player;
    controlsService;

    create() {
        this.controlsService = new ControlService(this, controlKeys);
        this.matter.world.setBounds(0, 0, gameSize.width, gameSize.height);
        this.player = this.matter.add.sprite(0, 0, "player");
        this.player.setFixedRotation(0);
    }

    update() {
        if (this.controlsService.isKeyDown('left')) this.player.setVelocityX(-1);
        if (this.controlsService.isKeyDown('right')) this.player.setVelocityX(1);
    }
}

export const mainScene = new MainScene("mainScene");
