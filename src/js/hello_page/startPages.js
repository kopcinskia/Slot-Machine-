
require('pixi.js');

import generateButton from './elements/generateButton'

export function generateHelloPage(app) {

    let helloPageContainer = new PIXI.Container();
    helloPageContainer.name = 'helloPageContainer';

    app.stage.addChild(helloPageContainer);

    //Load images;
    PIXI.loader
        .load(addTextBackground)
        .add("../assets/fonts/bitmap_fonts/gren-gradient.fnt")
        .add("../assets/fonts/bitmap_fonts/gren-gradient.png")
        .load(generateText)
        .load(generateButton(helloPageContainer, app));

    function addTextBackground() {

        let textBackground = new PIXI.Graphics();
        textBackground.beginFill(0xCCCCCC, 0.8).lineStyle(10, 0x000fff, 0.8);
        textBackground.drawRoundedRect(25, 20, 750, 560, 50);
        textBackground.endFill();

        helloPageContainer.addChild(textBackground);
    }

    function generateText() {


        let style = {font: "70px green-gradient", align: "center",};

        //Create a pixi bitmap text object for display and position it.
        let headerDisplayText = new PIXI.extras.BitmapText("", style)
        headerDisplayText.position.set(400, 220);
        headerDisplayText.anchor.set(0.5);
        headerDisplayText.maxWidth = 700;

        let count = 0;

        //todo tray in foreach u cant invaoke vunction with str-args
        _renderTextAnimate();

        function _renderTextAnimate() {
            let displayText = "Hello, Gambler in Sort-Machine! Let's play,  and get a HUGE reward! Are you READY?";

            let headerTextString = String(displayText);
            let headerTextLength = headerTextString.length;

            let time = 300;
            let length = headerTextLength * count / time;

            //Grab a a substring of the input text beginning with the first character
            let mark = headerTextString.substr(0, Math.floor(length));

            //Set the text of displayText object equal to the substring above
            headerDisplayText.text = mark;

            //Add the displayText to the stage and render
            helloPageContainer.addChild(headerDisplayText);

            //calculate loop
            const i = headerTextLength * time / 10;
            if (i > count) {
                count++;
                requestAnimationFrame(_renderTextAnimate);
            }
        }
    }
}


