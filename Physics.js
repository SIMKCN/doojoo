
class Physics {
    constructor() {

    }
    update(user, level) {
        this.updateVerticalPhysics(user);
        this.updateHorizontalPhysics(user);
        this.bounce(user, level);
    }
    updateVerticalPhysics(user)
    {
        user.y_position += user.y_speed;
        user.y_speed += user.y_acceleration;
        if(user.y_position > 1000)
        {
            user.y_position = 1000;
        }
        if(user.y_speed < -20)
        {
            user.y_speed = -20;
        }
    }
    updateHorizontalPhysics(user)
    {
        if(user.x_speed > 0)
        {
            user.x_speed -= user.x_acceleration;
        }
        if(user.x_speed < 0)
        {
            user.x_speed += user.x_acceleration;
        }
        if(user.x_speed < 0.001 && user.x_speed > -0.001)
        {
            user.x_speed = 0;
        }
        user.x_position += user.x_speed;
        if(user.x_position + 41 > 600)
        {
            user.x_position = 559;
            user.x_speed = 0;
        }
        if(user.x_position + 3< 0)
        {
            user.x_position = -3;
            user.x_speed = 0;
        }
    }
    bounce(user, level)
    {
        for(let plat_num = -1; plat_num < level.platforms.length; plat_num++)
        {
            if(user.y_speed > 0 && inXSpan(plat_num, user, level) && inYSpan(plat_num, user, level))
            {
                //jump.play();
                user.y_speed = -20;
                
            } else if (user.y_position == 1000) {
                //fall.play();
                user.resetPosition(level);
            }
        }
    }
    inXSpan(plat_num, user, level)
    {
        if(level.platforms[plat_num].x < user.x_position + 40 && level.platforms[plat_num].x + level.platforms[plat_num].width > user.x_position + 5)
        {
            return true;
        }
        return false;
    }
    
    inYSpan(plat_num, user, level)
    {
        if(level.platforms[plat_num].y - 10 < user.y_position && level.platforms[plat_num].y + 15 > user.y_position)
        {
            return true;
        }
        return false;
    }


}