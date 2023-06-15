import WaveSurfer from 'https://unpkg.com/wavesurfer.js@beta'

let playBtn = document.querySelector('#playBtn')

const wavesurfer = WaveSurfer.create({
  container: document.querySelector("#waveform"),
  waveColor: '#ddd',
  progressColor: '#ff006c',
  url: 'assest/audio/closer.mp3',
  height:30,
  barWidth:4,
  barRaduis:4,
  Responsive:true,

})


playBtn.onclick=function(){
  wavesurfer.playPause()
  if(playBtn.src.includes("assest/images/play.png")){
    playBtn.src="assest/images/pause-button.png"
  }
  else{
    playBtn.src="assest/images/play.png"
  }
}