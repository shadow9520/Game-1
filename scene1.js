//over here
//so first lets learn how to import files into your scene
//yes
//but inside of preload  there are three basic file types you need to learn to import
//audio, image, and sprite sheets
//to load a sprite sheet use
/**
 this.load.spritesheet('**name of sprite in scene**', 
    '**file path of png**',
    { frameWidth: **width**, frameHeight: ** hight}**)
    note the stars are just to show prompts, you dont put them in the real coliders
    
    note2 the file path refers to where the file is stored
    like your background is at "./backgrounds/glitched start screen.png"
    oops
    your characters are gifs
    oh there you go
    swap them
    
 */

  

var SceneOne = new Phaser.Class({

    Extends: Phaser.Scene,
    //every phaser scene has 5 parts

    //initialize, where you set the scenes id for the rest of the game to refer to
    initialize: function() {
      Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    //init where you receve data from other scenes
    // this is a little harder to use so youll probably not use it much at first
    init: function() {},
    //preload, where you import all sound and visual assets.
    //this includes sprite sheets, mp3s, and backgroungs
    preload: function() {
      this.load.image("background", "./backgrounds/life_pod_inside.png")
    
    this.load.spritesheet('dude', 
      './characters/character.png',
      { frameWidth: 64, frameHeight: 64 })
    },
      //
      //it wasent in preload XD
    //create, this is where you load the assets into the game, add coliders, set certian game logic, and set animation frames.
    //this will be the bulk of your program, if you can put somthing in create instead of update, always do so. It will help the preformance of your game
    create: function() {
      this.add.image(0, 0, 'background').setOrigin(0, 0)
    },
    
    //update, this is a constantly looping function.
    //it is manly used for keyboard inputs
    update: function(){},
});