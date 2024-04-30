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
        this.animation = null;
    }

    gameInit() {
        this.level.updateLevel(this.cur_level);
        this.frontend.dimOff();
        this.sleep(15).then(() => {this.loop();});
    }

   manager() 
    {
        this.time.calculateTime();
        this.level.updateLevel(this.cur_level);
        this.user.turn(this.time, this.user_input, this.cur_level, this.level);
        this.physics.update(this.user, this.level);
        this.render.draw(this.user, this.level);
        // this.frontend.render();
        this.loop(); 
    }

    loop(){
        if(this.asyncFinished())
        {
            this.sleep(5).then(() => {this.manager();});
            this.level_data_loading = true;
        }
        else{
            this.sleep(5).then(() => {this.loop();});
        }
    }

    asyncFinished(){
        if(this.level.level_data_loading)
        {
            return false;
        }
        else
        {
            return true;
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
