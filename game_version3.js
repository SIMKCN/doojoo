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
        this.time.updateTime();
        this.level.updateLevel(this.cur_level);
        this.frontend.dimOff();
        this.sleep(15).then(() => {this.loop();});
    }

   manager() 
    {
        if(this.user.playerIsAtGoal(this.level) || this.user.playerIsOutOfTime()){
            this.endGame();
        }
        else
        {
            this.time.updateTime();
            this.level.updateLevel(this.cur_level);
            this.user.turn(this.time, this.user_input, this.cur_level, this.level);
            this.physics.update(this.user, this.level);
            this.render.draw(this.user, this.level);
            this.frontend.updateScore(this.time, this.user);
            this.loop(); 
        }
    }

    endGame() {
        this.frontend.updateEndscreen(this.user);
        this.user.resetPosition(this.level);
        // resetTimer();
        this.render.emptyCanvas();
        this.frontend.dimOn();
        // audio.pause();
    }

    loop(){
        if(this.asyncFinished())
        {
            this.sleep(this.time.timeTillNextFrame()).then(() => {this.manager();});
            this.level_data_loading = false;
        }
        else{
            this.sleep(this.time.timeTillNextFrame()).then(() => {this.loop();});
            this.level_data_loading = true;
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
