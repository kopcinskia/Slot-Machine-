require('pixi.js');

export function generateText(app) {

    //Load images;
    app.loader
        //todo change font       http://kvazars.com/littera/
        .add("../assets/fonts/hyper-stiff-round-bootied-opossum/font.fnt")
        .add("../assets/fonts/hyper-stiff-round-bootied-opossum/font.png")
        .load(generateTexy);

    //todo
    //add background and hello text to start page

    //Global variables
    let headerTextString,
        headerTextLength,
        headerDisplayText,
        style,
        count;

    function generateTexy() {

        addTextBackground();

        //Create a javascript string object with input text
        headerTextString = String("Hello, Sort-Machine!");

        //Get the string length
        headerTextLength = headerTextString.length;

        //Create a style for display text
        style = {font: "font", align: "center",};

        //Create a pixi bitmap text object for display and position it.
        headerDisplayText = new PIXI.extras.BitmapText("", style);
        headerDisplayText.anchor.set(0, -0.5);
        headerDisplayText.position.set(70, 0);

        count = 0;
        renderTextAnimate();
    }
        function addTextBackground() {

            let textBackground = new PIXI.Graphics();
            // Rectangle
            //TODO opacity 0.8
            textBackground.beginFill(0x00ffff).lineStyle(10, 0x000fff);
            textBackground.drawRoundedRect(10, 10, 780, 580, 50);
            textBackground.endFill();
            
            app.stage.addChild(textBackground);
        }

        function renderTextAnimate() {
        //Update display text length
        let length = headerTextLength * count / 30;

        //Grab a a substring of the input text beginning with the first character
        let mark = headerTextString.substr(0, Math.floor(length));

        //Set the text of displayText object equal to the substring above
        headerDisplayText.text = mark;

        //Add the displayText to the stage and render
        app.stage.addChild(headerDisplayText);
        app.renderer.render(app.stage);

        const i = headerTextLength * 3;

        if(i > count) {
            count++;
            requestAnimationFrame(renderTextAnimate);
        }
    }
}