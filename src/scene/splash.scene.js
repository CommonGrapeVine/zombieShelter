import Phaser from "phaser";

class SplashScene extends Phaser.Scene {

  preload() {
    this.load.image("player", "assets/player.png");
    this.load.image("player", "assets/game-logo.jpeg");
  }

  create() {
    
  }

  update() {
    this.scene.start('mainScene');
  }
}

export const splashScene = new SplashScene("splashScene");
