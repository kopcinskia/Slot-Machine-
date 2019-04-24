import * as PIXI from 'pixi.js'

// TODO Load start page --> (nice animation after loading rectangle) https://www.youtube.com/watch?v=g77WfQ-blxI
// TODO copy and customize animation animation in pixi.js  -->  https://pixijs.io/examples-v4/#/demos-advanced/slots.js
// TODO customize start button animation after click in pixi.js

// TODO Gameplay:
// - load
// - say hello
//
// loop
// - push button cost c some coins
// - buton disable and change graphic
// - animiation start
// - when 3 wild in row u win <--- TODOS how did u know about the win?
// - when win scores up
// repeat
//
// TODO how did u know about the win?
// TODO Animation when win
// TODO add some coin scores

// The application will create a canvas element for you that you
// can then insert into the DOM
const app = new PIXI.Application();

document.body.appendChild(app.view);

// load the texture we need
PIXI.loader.add('bunny', 'assets/images/symbols/SYM1.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);

    // Listen for frame updates
    app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
    });
});