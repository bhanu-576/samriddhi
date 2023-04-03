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

// sr result convert speech to text
recognition.onresult = function(event){
   let current = event.resultIndex;
   let transcript = event.results[current][0].transcript;
//    console.log(transcript);
readOut(transcript);
};

//sr stop
recognition.onend = function (){
    console.log("vr end");
};
// speech contineous
// recognition.continuous = true;

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
speech.pitch = 1
// speech.rate = 1
// speech.voice = allVoice[7];
window.speechSynthesis.speak(speech)
console.log('speaking out');
}

speakBtn.addEventListener("click",()=>{
    readOut("HI,himanshu tum mujhe bahut aache lagte ho");
});

