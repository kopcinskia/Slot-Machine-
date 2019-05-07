require('pixi.js');

export function generateText(app) {

    //Load images;
    app.loader
        //todo change font       http://kvazars.com/littera/
        .add("../assets/fonts/bitmap_fonts/Aqua-gradient.fnt")
        .add("../assets/fonts/bitmap_fonts/Aqua-gradient.png")
        .load(generateText);

    //Global variables
    let headerTextString,
        headerTextLength,
        headerDisplayText,
        style,
        count;

    //TODO zamień zmienne na uniwersalny obiekt json

    function generateText() {

        addTextBackground();


        headerTextString = String("Hello, Sort-Machine!");
        headerTextLength = headerTextString.length;
        style = {font: "Aqua-gradient", align: "center"};

        //Create a pixi bitmap text object for display and position it.
        headerDisplayText = new PIXI.extras.BitmapText("", style);
        headerDisplayText.position.set(50, 50);
        headerDisplayText.maxWidth = 700  ;

        count = 0;
        renderTextAnimate();
    }
        function addTextBackground() {

            let textBackground = new PIXI.Graphics();
            // Rectangle
            textBackground.beginFill(0xCCCCCC, 0.8).lineStyle(10, 0x000fff, 0.8);
            textBackground.drawRoundedRect(10, 10, 780, 580, 50);
            textBackground.endFill();

            app.stage.addChild(textBackground);
        }

        function renderTextAnimate() {
        //Update display text length
        let time = 120;
        let length = headerTextLength * count / time;

        //Grab a a substring of the input text beginning with the first character
        let mark = headerTextString.substr(0, Math.floor(length));

        //Set the text of displayText object equal to the substring above
        headerDisplayText.text = mark;

        //Add the displayText to the stage and render
        app.stage.addChild(headerDisplayText);
        app.renderer.render(app.stage);

        const i = headerTextLength * time / 10;

        if(i > count) {
            count++;
            requestAnimationFrame(renderTextAnimate);
        }
    }
}