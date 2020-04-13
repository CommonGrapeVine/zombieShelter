export class ControlService {
    controls = {};
    constructor(scene, keyboardKeys) {
        Object.keys(keyboardKeys).forEach(key => {
            this.controls[key] = scene.input.keyboard.addKey(keyboardKeys[key]);
        })
    }
}