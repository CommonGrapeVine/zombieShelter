
export class ControlService {

    controls = {};

    constructor(scene, keyboardKeys) {
        Object.keys(keyboardKeys).forEach(key => {
            this.controls[key] = scene.input.keyboard.addKey(keyboardKeys[key]);
        })
    }

    /** Return if the key is pressed
     * @param key string that refers to the key
     */
    isKeyDown = (key) => {
        return this.controls[key] && this.controls[key].isDown;
    }
}