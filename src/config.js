// External imports
import Phaser, { GameObjects } from "phaser";

// Local imports
import { gameSize } from "./globals";

import * as scenes from "./scene";

console.log(scenes);

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
    scene: Object.keys(scenes).map(sceneKey => scenes[sceneKey])
};
export default config;