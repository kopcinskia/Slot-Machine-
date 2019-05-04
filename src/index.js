require('./index.scss');
import { startGame } from './js/game'

window.addEventListener("load", function() {


    const load_screen = document.getElementById("load_screen");
    startGame();


    document.body.removeChild(load_screen)
});