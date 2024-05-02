class SoundEffects{

    constructor() {
        this.audio = new Audio("music_background.mp3");
        this.fall = new Audio("scream.mp3");
        this.jump = new Audio("jump.wav");
        this.win = new Audio("win_sound.wav");
        this.jump.defaultPlaybackRate = 2.0;
    }

    backroundAudio(){
        this.audio.play();
    }
    backroundAudioPause(){
        this.audio.pause();
    }
    fallAudio(){
        this.fall.play();
    }
    jumpAudio(){
        // this.jump.play();
    }
    winAudio(){
        this.win.play();
    }
}