var Song1 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
      Phaser.Scene.call(this, { "key": "Song1" });
    },
    init: function() {},
    preload: function() {
      this.load.audio("song1", "./audio/song1.mp3");
    },
    create: function() {
      psong1 = this.sound.add("song1", { loop: true });
      psong1.play()
    },
    update: function() {}
});