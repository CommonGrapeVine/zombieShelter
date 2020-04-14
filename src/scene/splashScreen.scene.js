import Phaser from 'phaser';

class SplashScreenScene extends Phaser.Scene {


    preload() {
        for (var i = 0; i < 500; i++) {
            this.load.image("player" + i, "assets/player.png");
        }

        this.load.on('progress', (value) => {
            console.log(value);
        });

        this.load.on('fileprogress', (file) => {
            console.log(file.src);
        });

        this.load.on('complete', () => {
            // console.log('complete');
            this.scene.start('mainScreen');

        });
    }

    create() { }

    update() { }
}

export const splashScreenScene = new SplashScreenScene('splashScreen');