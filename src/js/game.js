require( 'pixi.js' );
//TODO add require to webpack

import { generateHelloPage } from "./hello_page/startPages";

export function startGame() {
    //Create pixi application
    const app = new PIXI.Application({ transparent: true });

    //Add view to DOM with css
    _addStyleToCanvas(app);
    document.body.appendChild(app.view);

    app.loader
        .load(generateHelloPage(app));
};

const _addStyleToCanvas = (div) => {
    div.view.style.position = 'absolute';
    div.view.style.top = '50%';
    div.view.style.width = '100vw';
    div.view.style.height = '100vh';
    div.view.style.transform = 'translate3d( 0, -50%, 0 )';
    // div.view.style.background = 'rgba(#CCC, 0.5)';
};

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


//TODO spin:
    //
// - when 3 wild in row u win <--- TODOS how did u know about the win?


// - when win scores up
// repeat
//
// TODO how did u know about the win?
// TODO Animation when win
// TODO add some coin scores

// The application will create a canvas element for you that you
// can then insert into the DOM


