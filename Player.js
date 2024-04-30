class Player {
    constructor() {
        this._player_points = 0;
        this._x_position = null;
        this._y_position = null;
        this._x_speed = null;
        this._y_speed = null;
        this._x_acceleration = 0.1;
        this._y_acceleration = 1;
        this.last_level = null;
        this.LEFT = 0;
        this.RIGHT = 1;
    }
    get x_position() {
        return this._x_position;
    }
    set x_position(new_x_position) {
        this._x_position = new_x_position;
    }
    get y_position() {
        return this._y_position;
    }
    set y_position(new_y_position) {
        this._y_position = new_y_position;
    }
    get y_speed() {
        return this._y_speed;
    }
    set y_speed(new_y_speed) {
        this._y_speed = new_y_speed;
    }
    get x_speed() {
        return this._x_speed;
    }
    set x_speed(new_x_speed) {
        this._x_speed = new_x_speed;
    }
    get x_acceleration() {
        return this._x_acceleration;
    }
    get y_acceleration() {
        return this._y_acceleration;
    }
    get player_points() {
        return this._player_points;
    }
    turn(time, user_input, cur_level, level) {
        this.spawnPlayer(cur_level, level);
        this.calulatePlayerPoints(time);
        this.playerMoves(user_input);
    }

    spawnPlayer(cur_level, level) {
        if(this.last_level != cur_level)
        {
            this.resetPosition(level);
            this.last_level = cur_level;
        }
    }

    calulatePlayerPoints(time) {
        this._player_points = 500 - Math.floor((Math.floor(time.time_since_start_mil / 200)));
    }

    playerMoves(user_input) {
        for (let keys = 0; keys < user_input.player_keys.length; keys++) {
            switch (user_input.player_keys.at(keys)) {
                case "a":
                    this.move(this.LEFT);
                    break;
                case "d":
                    this.move(this.RIGHT);
                    break;
            }
        }
    }

    move(direction) {
        if (direction == this.LEFT) {
            this._x_speed -= this._x_acceleration * 2;
        }
        else if (direction == this.RIGHT) {
            this._x_speed += this._x_acceleration * 2;
        }


    }
    resetPosition(level) {
        this._x_position = level.spawn_point.x;
        this._y_position = level.spawn_point.y;
        this._x_speed = 0;
        this._y_speed = 0;
    }

    playerIsAtGoal(level)
    {
        if(this._x_position + 40> level.finish_platform.x && this._x_position +5 <= level.finish_platform.x + level.finish_platform.width && this._y_position <= level.finish_platform.y + 15 && level.finish_platform.y - 20 < this._y_position ) {
            return true;
        }
        return false;
    }

    playerIsOutOfTime()
    {
        return this._player_points < 0;
    }

}