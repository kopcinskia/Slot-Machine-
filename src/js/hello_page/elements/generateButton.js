import {removeHelloPageContainer} from "./destroyAnimation";

export default function generateButton(helloPageContainer, app) {

    const textureButton = PIXI.Texture.fromImage('../assets/images/buttons/button.png');
    const textureButtonDown = PIXI.Texture.fromImage('../assets/images/buttons/button_down.png');
    const textureButtonOver = PIXI.Texture.fromImage('../assets/images/buttons//button_over.png');

    let button = new PIXI.Sprite(textureButton);
    button.buttonMode = true;
    button.anchor.set(0.5);
    button.x = 410;
    button.y = 500;

    // make the button interactive...
    button.interactive = true;
    button.buttonMode = true;

    button
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut)

    // add it to the stage
    button.rotation = Math.PI / -15;
    helloPageContainer.addChild(button);

    function onButtonDown() {
        this.isdown = true;
        this.texture = textureButtonDown;
        this.alpha = 1;
    }
    function onButtonUp() {
        removeHelloPageContainer(helloPageContainer, app)
    }
    function onButtonOver() {
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = textureButtonOver;
    }
    function onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = textureButton;
    }
}