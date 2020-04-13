import Phaser, { Physics } from "phaser";
import { mainScene } from "./scene/main.scene";
const config = {
    type: Phaser.CANVAS,
    width: 16 * 15,
    height: 16 * 10,
    parent: "game",
    zoom: 4,
    physics: {
        default: "matter",
        matter: {
            gravity: {
                y: 1
            }
        }
    },
    scene: mainScene
};
export default config;