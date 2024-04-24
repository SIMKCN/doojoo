class Level {
    constructor() {
        this._last_level = null;
        this._level = null;
        this._finish_platform = null;
        this._spawn_point = null;
        this._level_data_loading = null;
    }
    get platforms() {

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

            
            
            
        }
    }
    async readJSON() {

        const response = await fetch('level.json');


        const data = await response.json();

        this._level = data.level;
    
        this._finish_platform = data.finish_platform;
        
        this._spawn_point = data.spawn_point;
        this.level_data_loading = false;
        
    }

      
}