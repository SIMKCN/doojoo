class Frontend
{
    constructor() {
    
    }
    dimOn()
    {
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
}