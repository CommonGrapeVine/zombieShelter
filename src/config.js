import Phaser from "phaser";
import { mainScene } from "./scene/main.scene";
import { gameSize } from "./globals";
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin/src";

const config = {
    type: Phaser.CANVAS,
    ...gameSize,
    parent: "game",
    zoom: 2,
    autoRound: false,
    scale: { mode: Phaser.Scale.FIT },
    physics: {
        default: "matter",
        matter: {
            gravity: { y: 1 },
            setbound: { bottom: true, },
            // debug: true
        }
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin, // The plugin class
                key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
                mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
            }
        ]
    },
    scene: mainScene
};
export default config;