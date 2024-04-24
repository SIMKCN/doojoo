class Time{
    constructor() { 
        this._current_time = null; // überprüfen
        this._time_since_last_frame = null;
        this._last_time = null;

        this._time_since_start_mil = null;
        this._time_since_start_sec = null;
        this._time_since_start_min = null;


    } 
    get time_since_last_frame() {
        return this.time_since_last_frame;
    }
    
    updateTime()
    {
        this._time_since_start_mil += this.calculateTime();
        this._time_since_start_sec = Math.floor(this._time_since_start_mil / 1000);
        this._time_since_start_min = Math.floor(this._time_since_start_mil / 60000);
 
        // displayTime(); kommen beide in render class
        // displayPoints();
    }
    calculateTime() 
    {
        if(this._last_time != null)
        {
            this._current_time = Date.now();
            let temp_time_last_frame = this._current_time - this._last_time;
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

}