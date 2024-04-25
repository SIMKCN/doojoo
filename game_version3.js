class GameLoop{
    
    constructor() {

        this.time = new Time();
        this.user = new Player();
        this.user_input = new Input();
        this.level = new Level();
        this.physics = new Physics();
        // this.sfx = new SoundEffects();
        this.render = new Render();
        this.frontend = new Frontend();
        this.cur_level = 1;
        this.first_loop = true;
        this.animation = null;
        this.frontend = null;
    }

    loop() 
    {
        this.gameInit();
        console.log("Game Init -- done");
        this.time.calculateTime();
        console.log("Cacl Time -- done");
        this.level.updateLevel(this.cur_level);
        console.log("update Level-- done");
        this.user.turn(this.time, this.user_input);
        console.log("Turn -- done");
        this.physics.update(this.user, this.level);
        console.log("Physics -- done");
        this.render.draw(this.user, this.level);
        console.log("draw-done")
        this.frontend()
        console.log("frontend done")
        this.sleep(15).then(() => {this.loop();});

    }
    gameInit() {
        if (this.first_loop) {
            this.level.updateLevel(this.cur_level);
            this.sleep(15).then(() => {this.loop();});
            this.first_loop = false;
        }
        
    }
    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

}

function start() {
    game_loop = new GameLoop();
    game_loop.gameInit();
}

