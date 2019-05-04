import * as PIXI from 'pixi.js'




export function startGame() {

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
    for(var i=0; i<100; i++) {
        var mycanvas = document.getElementById("myCanvas");
        const app = new PIXI.Application(1400, 700, {
            view: mycanvas,
            // transparent: true
        });


        document.body.appendChild(app.view);
        document.body.removeChild(app.view);
    }
//TODO wydziel to

}