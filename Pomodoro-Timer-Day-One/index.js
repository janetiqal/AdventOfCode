console.log('js attached')

const startBtn = document.querySelector('.start')
const settingsBtn = document.querySelector('.settings')
var minutes = document.querySelector('.minutes > input[type=text]')
var seconds = document.querySelector('.seconds > input[type=text]')
let startTime= 0;
let timeRunning = false;
let timer;

//start btn will either start or stop the timer
startBtn.addEventListener('click',()=>{
   //if running stop
    if(!timeRunning){
        startTimer();
    }
   //if not running, start
   else if(timeRunning){
       stopTimer();
   }
})


function startTimer(){
    timeRunning= true;
    console.log('timer started')
    startBtn.innerHTML="Stop"
    console.log(minutes, seconds)
    var totalMinutesToSeconds  = parseInt((minutes.value) * 60) + parseInt(seconds.value)
    console.log(totalMinutesToSeconds)
    //timer needs to countdown 
    startTime= Date.now()
    console.log(startTime)
    timer = setInterval(()=>{
        const currentTime= Date.now()
        console.log(currentTime)
        const diff = currentTime - startTime
        const secondsLeft = totalMinutesToSeconds - Math.floor(diff / 1000);
        const minutesLeft = Math.floor(secondsLeft / 60);

        seconds.value = secondsLeft % 60;
        minutes.value = minutesLeft;

        console.log(secondsLeft)
        if( secondsLeft ==0 && minutesLeft <=0){
            timerDone();
        }
    },1000)
 
}
function stopTimer(){
    timeRunning= false;
    console.log('timer stopped')
    startBtn.innerHTML="Start"
    //pauses the timer
    clearInterval(timer)
}

function timerDone(){
    clearInterval(timer);
    console.log('clear the timer')
}