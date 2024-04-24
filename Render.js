class Render {
    constructor() {
        this.can = document.getElementById('gamewindow');
        this.ctx = this.can.getContext('2d');
        this.plat_color = this.can.getContext('2d');
        this.goal = this.can.getContext('2d');
        this.can.height = 1000;
        this.can.width = 600;
    }

    draw(user, level) {
        this.emptyCanvas();
        this.drawPlayer(user);
        this.drawPlatform(level);
    }
    emptyCanvas()
    {
        this.ctx.fillStyle = "rgba(238, 224, 203, 1)";
        this.ctx.fillRect(0, 0, this.can.width, this.can.height);
    }

    drawPlayer(user)
    {
        this.ctx.drawImage(document.getElementById("playerIcon"), user.x_position, user.y_position-50, 50, 50);
    }
    drawPlatform(level) {
        for (let plat_num = 0; plat_num < level.platforms.length; plat_num++) {
            
            this.plat_color.fillStyle = 'rgba(132,133,134, 1)';
            this.plat_color.fillRect(level.platforms[plat_num].x, level.platforms[plat_num].y, level.platforms[plat_num].width, 20);
            
        }
        this.goal.fillStyle = 'rgba(181, 138, 27, 1)';
        this.goal.fillRect(level.finish_platform.x, level.finish_platform.y, level.finish_platform.width, 20);
    }



}