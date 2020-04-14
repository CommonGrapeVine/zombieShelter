import Phaser from 'phaser';
import { MyGraphics } from '../models/MyGraphics'
class SplashScreenScene extends Phaser.Scene {

    progressBar;
    progressBox;
   
    preload() {
        this.progressBar = new MyGraphics(this);
        this.progressBar.setDefaultStyles({
            lineStyle: {
                width: 1,
                color: 0x222222,
                alpha: 1
            },
            fillStyle: {
                color: 0x222222,
                alpha: 1
            }
        });
        this.progressBox = new MyGraphics(this);
        this.progressBox.setDefaultStyles({
            lineStyle: {
                width: 1,
                color: 0x222222,
                alpha: 1
            },
            fillStyle: {
                color: 0x222222,
                alpha: 1
            }
        });
        this.progressBox.fillStyle(0x222222, 0.8);
        this.progressBox.fillRect(240, 270, 320, 50);


        for (var i = 0; i < 500; i++) {
            this.load.image("player" + i, "assets/player.png");
        }

        this.load.on('progress', (value) => {
            console.log(value);
            this.progressBar.clear();
            this.progressBar.fillStyle(0x222222, 1);
            this.progressBar.fillRect(250, 280, 300 * value, 30);
        });

        this.load.on('fileprogress', (file) => {
            console.log(file.src);
        });

        this.load.on('complete', () => {
            this.scene.start('mainScene');
        });
    }

    create() {

    }

    update() { }
}

export const splashScreenScene = new SplashScreenScene('splashScreen');