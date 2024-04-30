class Frontend {
    constructor() {

    }

    updateScore(time, user) {
        this.displayTime(time); 
        this.displayPoints(user);
    }

    displayTime(time)
    {
        let sec_counter = time.time_since_start_sec - (time.time_since_start_min * 60);
        if(sec_counter >= 10)
        {
            document.getElementById("time").innerHTML = time.time_since_start_min + ":" + sec_counter;
        }
        else
        {
            document.getElementById("time").innerHTML = time.time_since_start_min + ":0" + sec_counter;
        }
        
    }

    displayPoints(user)
    {
        document.getElementById("score").innerHTML = "Punkte:" + user.player_points;
    }

    dimOn() {
        document.getElementById("restartButton").style.display = "";
        document.getElementById("darkLayer").style.display = "";
        document.getElementById("endtitel").style.display = "";
        document.getElementById("endPunkte").style.display = "";
        document.getElementById("time").style.display = "none";
        document.getElementById("score").style.display = "none";
    }

    dimOff() {
        document.getElementById("endtitel").style.display = "none";
        document.getElementById("endPunkte").style.display = "none";
        document.getElementById("button").style.display = "none";
        document.getElementById("darkLayer").style.display = "none";
        document.getElementById("restartButton").style.display = "none";
        document.getElementById("time").style.display = "";
        document.getElementById("score").style.display = "";
    }


    updateEndscreen(user, is_level_left) {
        if (user.playerIsOutOfTime()) {
            document.getElementById("endtitel").innerHTML = "Du hast Verloren";
            document.getElementById("endPunkte").innerHTML = "";
            document.getElementById("restartButton").innerHTML = "Erneut Starten";
        }
        else {
            if(!is_level_left){
                document.getElementById("endtitel").innerHTML = "Du hast Gewonnen";
                document.getElementById("endPunkte").innerHTML = user.player_points + " Levelpunkte";
                document.getElementById("restartButton").innerHTML = "Erneut Starten";
            }
            else {
                document.getElementById("endtitel").innerHTML = "Du hast das Level geschafft!";
                document.getElementById("endPunkte").innerHTML = user.player_points + " Levelpunkte";
                document.getElementById("restartButton").innerHTML = "Nächstes Level";
            }
            
        }
    }
}