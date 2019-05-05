require('pixi.js');

export function generateText(app) {

    //Load images;
    app.loader
        .add("../assets/fonts/hyper-stiff-round-bootied-opossum/font.fnt")
        .add("../assets/fonts/hyper-stiff-round-bootied-opossum/font.png")
        .load(setup);

    //todo
    //add background and hello text to start page

    //Global variables
    let headerTextString,
        headerTextLength,
        headerDisplayText,
        style,
        count;

    function setup() {

        //Create a javascript string object with input text
        headerTextString = String("Hello, Sort-Machine!");

        //Get the string length
        headerTextLength = headerTextString.length;

        //Create a style for display text
        style = {font: "font", align: "center",};

        //Create a pixi bitmap text object for display and position it.
        headerDisplayText = new PIXI.extras.BitmapText("", style);
        headerDisplayText.anchor.set(0, -0.5);
        // headerDisplayText.position.set(rw/2, rh/5);

        count = 0;
        renderTextAnimate();
    }

    function renderTextAnimate() {
        //Update display text length
        let length = headerTextLength * count / 120;

        //Grab a a substring of the input text beginning with the first character
        let mark = headerTextString.substr(0, Math.floor(length));

        //Set the text of displayText object equal to the substring above
        headerDisplayText.text = mark;

        //Add the displayText to the stage and render
        app.stage.addChild(headerDisplayText);
        app.renderer.render(app.stage);

        const i = headerTextLength * 6;

        if(i > count) {
            count++;
            requestAnimationFrame(renderTextAnimate);
        }
    };
}