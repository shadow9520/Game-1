var SceneTwo = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
      Phaser.Scene.call(this, { "key": "SceneTwo" });
    },
    init: function() {},
    preload: function() {
      this.load.image("background", "./backgrounds/Sky background.png")
    },
    create: function() {
      this.add.image(0, 0, 'background').setOrigin(0, 0)
    },
  
    update: function() {}
});