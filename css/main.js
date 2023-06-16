import WaveSurfer from 'https://unpkg.com/wavesurfer.js@beta'




function playMusic(playBtn, location, audio) {

    const wavesurfer = WaveSurfer.create({
        container: location,
        waveColor: '#ddd',
        progressColor: '#ff006c',
        url: audio,
        height: 30,
        barWidth: 4,
        barRaduis: 4,
        Responsive: true,

    })

    playBtn.onclick = function() {
        wavesurfer.playPause()
        if (playBtn.src.includes("assest/images/play.png")) {
            playBtn.src = "assest/images/pause-button.png"
        } else {
            playBtn.src = "assest/images/play.png"
        }
    }

}
let audio = 'assest/audio/closer.mp3'
let location = document.querySelector(".waveform")
let playBtn = document.querySelector('.playBtn')



let audio1 = 'assest/audio/05._Still_Hood.mp3'
let location1 = document.querySelector(".waveform-1")
let playBtn1 = document.querySelector('.playBtn-1')


let audio2 = 'assest/audio/07._Fuckin_Problems_(Feat._Drake,_2_Chainz,_Kendrick_Lamar).mp3'
let location2 = document.querySelector(".waveform-2")
let playBtn2 = document.querySelector('.playBtn-2')

playMusic(playBtn1, location1, audio1);
playMusic(playBtn, location, audio);
playMusic(playBtn2, location2, audio2);