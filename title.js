var Title = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Title" });
    },
    init: function() {},
    preload: function() {
      this.load.image("background", "./backgrounds/glitched start screen.png")
      this.load.audio("audio", "/audio/song1.mp3");
    },
    create: function() {
      create: function() {
      this.add.image(0, 0, 'background').setOrigin(0, 0)
      ready = false
      paudio = this.sound.add("audio", { loop: true });
      paudio.play();
        text = this.add.text(
            400, 
            300, 
            "2D Subnautica", 
            {
                fontSize: 50,
                color: "#000000",
                fontStyle: "bold"
            }
            ).setOrigin(0.5);
        this.time.addEvent({
          delay: 1500,
          loop: false,
          callback: () => {
            text2 = this.add.text(
              400, 
              370, 
              "Shadowfang95", 
              {
                  fontSize: 40,
                  color: "#000000",
                  fontStyle: "bold"
              }
            ).setOrigin(0.5);
          }
        })
        this.time.addEvent({
          delay: 3000,
          loop: false,
          callback: () => {
            text3 = this.add.text(
              400, 
              440, 
              "Press SPACE to start", 
              {
                  fontSize: 30,
                  color: "#000000",
                  fontStyle: "bold"
              }
            ).setOrigin(0.5);
            ready = true
          }
        })
    },
    update: function() {
      var key = this.input.keyboard.addKey("SPACE");
      
      if (ready){
        if(key.isDown){
          select.play();
          ready = false
          let container = this.add.container(0, 0, [text]);
          this.physics.world.enableBody(container);
          container.body.setVelocityY(100)
          this.time.addEvent({
            delay: 200,
            loop: false,
            callback: () => {
              let container = this.add.container(0, 0, [text2]);
              this.physics.world.enableBody(container);
              container.body.setVelocityY(100)
              this.time.addEvent({
                delay: 200,
                loop: false,
                callback: () => {
                  let container = this.add.container(0, 0, [text3]);
                  this.physics.world.enableBody(container);
                  container.body.setVelocityY(100)
                  this.time.addEvent({
                    delay: 1000,
                    loop: false,
                    callback: () => {
                      pmusic.stop()
                      this.scene.start("SceneOne")
                      this.scene.start("Song1")
                      this.scene.stop();
                    }
                  })
                }
              })
            }
          })
        }
      }
    }
});
//SceneOne