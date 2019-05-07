require('pixi.js');

import generateButton from './elements/deskButton'

export function generateHelloPage(app) {

    let headerTextString,
        headerTextLength,
        headerDisplayText,
        style,
        count;

    //Load images;
    app.loader
        .add("../assets/fonts/bitmap_fonts/green-gradient.fnt")
        .add("../assets/fonts/bitmap_fonts/green-gradient.png")
        .load(generateText);

    function generateText() {

        _addTextBackground();
        headerTextString = String("Hello, Gambler in Sort-Machine! Let's play, let's win and get a HUGE reward! Are you READY?");
        headerTextLength = headerTextString.length;
        style = {font: "70px gren-gradient", align: "center",};

        //Create a pixi bitmap text object for display and position it.
        headerDisplayText = new PIXI.extras.BitmapText("", style);
        headerDisplayText.position.set(400, 220);
        headerDisplayText.anchor.set(0.5);
        headerDisplayText.maxWidth = 700  ;

        count = 0;
        _renderTextAnimate();

        //TODO segregate this code to another file
        app.stage.addChild(generateButton(app));
    }

    function _addTextBackground() {

        let textBackground = new PIXI.Graphics();
        textBackground.beginFill(0xCCCCCC, 0.8).lineStyle(10, 0x000fff, 0.8);
        textBackground.drawRoundedRect(10, 10, 780, 580, 50);
        textBackground.endFill();

        app.stage.addChild(textBackground);
    }
    function _renderTextAnimate() {
        let time = 300;
        let length = headerTextLength * count / time;

        //Grab a a substring of the input text beginning with the first character
        let mark = headerTextString.substr(0, Math.floor(length));

        //Set the text of displayText object equal to the substring above
        headerDisplayText.text = mark;

        //Add the displayText to the stage and render
        app.stage.addChild(headerDisplayText);
        app.renderer.render(app.stage);

        //calculate loop
        const i = headerTextLength * time / 10;
        if(i > count) {
            count++;
            requestAnimationFrame(_renderTextAnimate);
        }
    }
}