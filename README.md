# Welcome to NetEnt coding assigment for Game Developer

## General rules
- Technologies to use: HTML5, JS
- All drawing should be performed on HTML Canvas (except Symbol selection)
- No external framework should be used
- Use git to document show how your code is evolving

## Recommended (but not required)
- Pixi.js, TweenMax
- Supporting mobile devices
- Visually appealing

## Project initial run
  ```bash
  npm i
  npm start
  ```

## Deliverable

A small game that will match a selected value with a symbol/image and show a result depending on win or lose scenario. 

So basically, the player selects a “fruit” from e.g. a selection box then clicks the play button, gets presented with some kind of visual symbol switch and then a result/win scenario. 


## Game Specification

### The purpose of an assignment

The purpose of the assignment is to show off your skills, both in terms of how you solve a problem, structure code as well as your eye for visual design (layout, animations) so if you feel that you need to change any of the files, please do.

Feel free to add stuff you feel would enhance the game (e.g. audio, win animations etc.). 

The minimum requirement is a fully functional “game flow” (i.e. loading, gameplay, result), and it is really the only requirement, how you present the game is fully up to you. However, the main focus of this assignment is to check your ability to write clean, well-structured and reusable code. 

### Loading phase

#### Resource fetching
We provide a JSON file in the boiler-plate which you can edit it as you like.
Upon loading the game, the file names shall be fetched from the JSON file by AJAX request and loaded into the game. 

Boiler-plate is configured with assets like symbols, background images, sounds included.

### Game phase

#### Display area

One symbol shall be shown in the display area, the area itself should be separated from the rest of the layout. 

#### Symbol selection

The player must be able to select a symbol, by using a selection box for example. The symbols can be represented in text, “wild” for SYM1 etc. (symbol images are provided). 

Play button : The play button shall not be enabled until the loading phase has completed, preferably this is indicated in some way. When enabled and clicked it starts the symbol switch. 

### Symbol switch phase

The display area shall switch between the pre-loaded symbols, preferably some kind of animation indicates the switch (like a fade or scale animation) but is not required. After some arbitrary time the switching stops and the result symbol is shown. 

### Result phase

If the result symbol matches the selected symbol we have a win situation, this shall be indicated in some way. 

