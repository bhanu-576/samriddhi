//elements
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

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