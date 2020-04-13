import Phaser, { Physics } from "phaser";
import { mainScene } from "./scene/main.scene";
import { isTSConstructSignatureDeclaration } from "@babel/types";
import { gameSize } from "./globals";
const config = {
    type: Phaser.CANVAS,
    ...gameSize,
    parent: "game",
    zoom: 4,
    physics: {
        default: "matter",
        matter: {
            gravity: {
                y: 1
            },
            setbound: {
                bottom: true,
            },
            debug: true,
            
        }
    },
    scene: mainScene
};
export default config;