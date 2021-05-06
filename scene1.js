var SceneOne = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
      Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {
      this.load.image("background", "./backgrounds/glitched start screen.png")
    },
    create: function() {
      this.add.image(0, 0, 'background').setOrigin(0, 0)
    },
    update: function() {}
});