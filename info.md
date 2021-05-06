look at the preview bean


so there are 5 functions in your standerd scene, `initilize` `init` `preload` `create` `update`
The only time you should do anything with `initilize` is when your creating a new scene

creating a new scene
-
when creating a new scene there are a few things you should add/change 

new scene *note you can start with scene template
```js
var ***Sceneone***(change this to  scene name) = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
      Phaser.Scene.call(this, { "key": "***Sceneone***(change this to  scene name)" });
    },
    init: function() {},
    preload: function() {},
    create: function() {},
    update: function() {}
});
```

index.html
```js
const phaserConfig = {
          type: Phaser.AUTO,
          scale: {
            autoCenter: Phaser.Scale.CENTER_BOTH,
            mode: Phaser.Scale.FIT,
            parent: "app",
            width: 400,
            height: 400,
          },

          physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
          },
          scene: [SceneOne, ***add scene name here***]
      }
      const game = new Phaser.Game(phaserConfig);
```

Other functions
-

- `init`

you use init to import data from other scenes

- `preload`

you use this to load assets

- `create`

you use this to set up the scene

- `update`

you use this to do things that repedidly happen

add stuff
-

`this.load.audio("nameinfile", "./filepath.mp3");`

`pmusic1 = this.sound.add("nameinfile", { loop: true });`

image

`this.load.image("nameinfile", "./filepath.mp3");`
``

also look at [the phaser documentation](https://photonstorm.github.io/phaser3-docs/) 

