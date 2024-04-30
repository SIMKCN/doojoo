class Input
{
    constructor() {
        this._player_keys = [];
        document.addEventListener("keydown", (press) => {
            if(this._player_keys.indexOf(press.key) == -1)
            {
                this._player_keys.push(press.key);
            }
        });
        document.addEventListener("keyup", (lift) => {
            if(this._player_keys.indexOf(lift.key) != -1)
            {
                this._player_keys.splice(lift.key);
            }
        });
    }
    get player_keys()
    {
        return this._player_keys;
    }
}



