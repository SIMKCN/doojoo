class Player {
    constructor() {
        this._player_points = null;
        this._x_position = null;
        this._y_position = null;
        this._x_speed = null;
        this._y_speed = null;
        this._x_acceleration = null;
        this._y_acceleration = null;
        const LEFT = 0;
        const RIGHT = 1;
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
    turn(time, user_input) {
        this.calulatePlayerPoints(time);
        this.playerMoves(user_input);
    }

    calulatePlayerPoints(time) {
        this._player_points = 500 - Math.floor((Math.floor(time.time_since_start_mil / 200)));
    }

    playerMoves(user_input) {
        for (let keys = 0; keys < user_input.player_keys.length; keys++) {
            switch (user_input.player_keys.at(keys)) {
                case "a":
                    move(LEFT);
                    break;
                case "d":
                    move(RIGHT);
                    break;
            }
        }
    }

    move(direction) {
        if (direction == LEFT) {
            this._x_speed -= this._x_acceleration * 2;
        }
        else if (direction == RIGHT) {
            this._x_speed += this._x_acceleration * 2;
        }


    }
    resetPosition(level) {
        this._x_position = level.spawnPoint.x;
        this._y_position = level.spawnPoint.y;
        this._x_speed = 0;
        this._y_speed = 0;
    }

}