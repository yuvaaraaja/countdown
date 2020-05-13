const startbutton = document.querySelector("#start");
const stopbutton = document.querySelector("#stop");
const clockblock = document.querySelector("#clock");
let seconds; 
let stopvar;
let count = 1;

function playaudio() {
    var audio = document.getElementById('audio');
    audio.play();
    audio.onended = function() {
            if(count <= 2){
            count++;
            this.play();
        }
    };
}

function countdown(){
    seconds--;
    clockblock.textContent = seconds;
    //console.log(seconds);
    if(seconds === 0) {
        clearInterval(stopvar);
    playaudio();
    }
}

function startcountdown () {
    seconds = prompt("Type in the seconds to run the clock -");
    if(seconds !== "" && seconds !== null)
    {
        seconds = parseInt(seconds);
        if(typeof(seconds) === "number" && seconds > 0)
        {
            clockblock.textContent = seconds;
            stopvar = setInterval(countdown, 1000);
        }
        else {
            alert("Type in valid seconds to count, man!")
        }
    }
    //console.log("completed");
}

function stopcountdown() {
    if(seconds > 0) {
        if(confirm("Do you really wanna stop the countdown?")){
            document.querySelector("#clock").textContent = 0;
            clearInterval(stopvar);
            }
        }    
}

startbutton.addEventListener("click",startcountdown);

stopbutton.addEventListener("click",stopcountdown);