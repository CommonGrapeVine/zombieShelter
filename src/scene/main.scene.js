import Phaser from "phaser"
import { gameSize } from "../globals";
import { Player } from "../models/player.model";
class MainScene extends Phaser.Scene {

    player;

    preload() {
        this.load.image("player", "assets/player.png");
        this.load.image("weapon", "assets/weapon.png");
        this.load.image("bullet", "assets/bullet.png");
        this.load.tilemapTiledJSON("map", "assets/tiledMap.json");
        this.load.tilemapTiledJSON("map2", "assets/tileMap2.json");
        this.load.image("tiles", "assets/tile.png");
    }

    create() {
        // this.matter.world.setBounds(0, 0, gameSize.width, gameSize.height);
        this.player = new Player(this, { x: 50, y: 50 }, 'player', 1);
        const map = this.createMap(this);
    }

    update(time, delta) {
        this.player.update(time, delta);
    }

    createMap = (scene) => {
        const map = scene.make.tilemap({ key: 'map2' });

        const tileset = map.addTilesetImage("tile", "tiles");
        const layers = {};
        map.layers.forEach((layer) => {
            layers[layer.name] = map.createDynamicLayer(layer.name, tileset, 0, 0);
            map.setCollisionByProperty({ collides: true });
            scene.matter.world.convertTilemapLayer(layers[layer.name]);
        });        

        scene.matter.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        scene.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        scene.cameras.main.startFollow(this.player.sprite);
        scene.cameras.main.setBackgroundColor('#345678');

        return map;
    }
}
export const mainScene = new MainScene("mainScene");
