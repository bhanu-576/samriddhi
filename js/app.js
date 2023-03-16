//elements
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");


//Speech recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//sr start
recognition.onstart = function (){
    console.log("vr active");

};

//sr stop
recognition.onend = function (){
    console.log("vr end");
};
// speech contineous
recognition.continuous = true;

startBtn.addEventListener("click",()=>{
    recognition.start();
});
stopBtn.addEventListener("click",()=>{
    recognition.stop();
});
//samriddhi speech
function readOut(message){

const speech = new SpeechSynthesisUtterance()
// const allVoice = speechSynthesis.getVoices();
speech.text = message;
// speech.voice = allVoice[7];
speech.volume = 1
window.speechSynthesis.speak(speech)
console.log('speaking out');
}

speakBtn.addEventListener("click",()=>{
    readOut("HI,bhanu I love you");
});

