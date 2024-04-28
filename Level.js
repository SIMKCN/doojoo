class Level {
    constructor() {
        this._last_level = null;
        this._level = null;
        this._finish_platform = null;
        this._spawn_point = null;
        this._level_data_loading = null;
    }
    get platforms() {
        console.log(0 == null);
        return this._level[this._last_level];
    }
    get finish_platform() {
        return this._finish_platform[this._last_level];
    }
    get spawn_point() {
        return this._spawn_point[this._last_level];
    }

    updateLevel(cur_level) {
        if (this._last_level != cur_level - 1) {
            this.level_data_loading = true;
            this.readJSON(cur_level-1); 
            this._last_level = cur_level - 1;
            this.waitForFinish();
            console.log("waited");
        }
    }
    async readJSON() {

        const response = await fetch('level.json');


        const data = await response.json();

        this._level = data.level;
    
        this._finish_platform = data.finish_platform;
        
        this._spawn_point = data.spawn_point;
        console.log("load");
        this._level_data_loading = false;
        
    }

    waitForFinish() {
        if(this._level_data_loading || this._level_data_loading == null)
        {
            console.log("work");
            this.sleep(2).then(() => {this.waitForFinish()});
            console.log("work2");
        }
        else
        {
            console.log(this._level_data_loading + "1");
            this._level_data_loading = null;
        }
    }

    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

      
}