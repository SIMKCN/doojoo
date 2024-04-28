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
    }

    loop() 
    {
        this.gameInit();
        this.time.calculateTime();
        this.level.updateLevel(this.cur_level);
        this.user.turn(this.time, this.user_input);
        this.physics.update(this.user, this.level);
        this.render.draw(this.user, this.level);
        this.frontend.render();
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

