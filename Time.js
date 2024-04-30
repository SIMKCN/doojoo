class Time{
    constructor() { 
        this._current_time = null; // überprüfen
        this._time_since_last_frame = null;
        this._last_time = null;
        this._frames_since_start = 0;

        this._time_since_start_mil = null;
        this._time_since_start_sec = null;
        this._time_since_start_min = null;


    } 
    get time_since_last_frame() {
        return this.time_since_last_frame;
    }

    get time_since_start_sec() {
        return this._time_since_start_sec;
    }

    get time_since_start_min() {
        return this._time_since_start_min;
    }

    get time_since_start_mil() {
        return this._time_since_start_mil;
    }
    
    updateTime()
    {
        this._time_since_last_frame = this._time_since_start_mil;
        this._time_since_start_mil += this.calculateTime();
        this._time_since_start_sec = Math.floor(this._time_since_start_mil / 1000);
        this._time_since_start_min = Math.floor(this._time_since_start_mil / 60000);

    }
    calculateTime() 
    {
        if(this._last_time != null)
        {
            this._current_time = Date.now();
            let temp_time_last_frame = this._current_time - this._last_time;
            console.log(temp_time_last_frame);
            this._last_time = this._current_time;
            return temp_time_last_frame;
        }
        else
        {
            this._current_time = Date.now();
            this._last_time = this._current_time;
            return 0;
        }
    }

    timeTillNextFrame()
    {
        this._frames_since_start++;
        updateTime()
        this._time_since_last_frame = null
        // console.log(this._time_since_start_mil / (this._frames_since_start*5));
        // console.log(this._frames_since_start*5);
        return 15/*..... */;
    }

}