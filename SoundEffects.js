class SoundEffects{

    constructor() {
        this.audio = new Audio("/music/music_background.mp3");
        this.fall = new Audio("/music/scream.mp3");
        this.jump = new Audio("/music/jump.wav");
        this.win = new Audio("/music/win_sound.wav");
        this.jump.defaultPlaybackRate = 2.0;
    }

    backroundAudio(){
        this.audio.play();
        this.audio.loop = true;
    }
    backroundAudioPause(){
        this.audio.pause();
    }
    fallAudio(){
        this.fall.play();
    }
    jumpAudio(){
        this.jump.play();
    }
    winAudio(){
        this.win.play();
    }
}