export function removeHelloPageContainer(removeHelloPageContainer, app) {

    app.stop();

    PIXI.loader
        .add('spritesheet', '../assets/boom.json')
        .load(onAssetsLoaded);

    function onAssetsLoaded() {
        // create an array to store the textures
        let explosionTextures = [];

        let i
        for (i = 0; i < 27; i++) {
            let texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i + 1) + '.png');
            explosionTextures.push(texture);
        }
        // create an explosion AnimatedSprite

        let explosion = new PIXI.extras.AnimatedSprite(explosionTextures);
        explosion.x = app.screen.width /2;
        explosion.y = app.screen.height /2;
        explosion.anchor.set(0.5);
        explosion.scale.set(8 + Math.random() * 0.5);
        explosion.gotoAndPlay(i);
        explosion.animationSpeed = 0.13;
        explosion.name = 'explosion';
        app.stage.addChild(explosion);

        app.start();

        setTimeout(function () {
            removeHelloPageContainer.destroy();

        }, 1500);
        setTimeout(function () {
            explosion.destroy();
        }, 3450);
        //
    }
}