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
   transcript = transcript.toLowerCase();
   console.log(transcript);
    // getting command like hi= hello bhanu
    if(transcript.includes("hi samriddhi")||transcript.includes("samriddhi")){
        readOut("hi bhanu");
    }
    if(transcript.includes("kya hal hai")|| transcript.includes("kaisi hai")){
        console.log(transcript);
        readOut("main theek hu ");
    }
    if(transcript.includes("open youtube")){
        readOut("opening youtibe");
        window.open("https://www.youtube.com/");
    }
    // google serch concept
    if(transcript.includes("search for")){
        readOut("your result's");
        let input = transcript.split("");
        input.splice(0,11);
        input = input.join("").split(" ").join("+");
        window.open(`https://www.google.com/search?q=${input}`);
        // console.log(input);
    }

    // youtube search
    if(transcript.includes("play")){
        readOut("playing");
        let input1 = transcript.split("");
        input1.splice(0,5);
        input1 = input1.join("").split(" ").join("+");
        window.open(`https://www.youtube.com/results?search_query=${input1}`);
    }
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
speech.pitch = 1;
speech.rate = .9;
// speech.voice = allVoice[7];
window.speechSynthesis.speak(speech)
console.log('speaking out');
}

speakBtn.addEventListener("click",()=>{
    readOut("HI,himanshu tum mujhe bahut aache lagte ho");
});

