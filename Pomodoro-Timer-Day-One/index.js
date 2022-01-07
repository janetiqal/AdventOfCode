console.log('js attached')

const startBtn = document.querySelector('.start')
const settingsBtn = document.querySelector('.settings')
var minutes = document.querySelector('.minutes > input[type=text]')
var seconds = document.querySelector('.seconds > input[type=text]')
const ring = document.querySelector('.ring')
let startTime= 0;
let timeRunning = false;
let timer;
let originalMinutes = 0;
let originalSeconds = 0;

//start btn will either start or stop the timer
startBtn.addEventListener('click',()=>{
   //if running stop
    if(!timeRunning){
        startTimer();
    }
   //if not running, start
   else if(timeRunning){
       pauseTimer();
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
        if( secondsLeft <=0 && minutesLeft <=0){
            timerDone();
        }
    },1000)
    minutes.disabled= true;
    seconds.disabled=true;
 
}
//pauseTimer
function pauseTimer(){
    timeRunning= false;
    console.log('timer stopped')
    startBtn.innerHTML="Start"
    //pauses the timer
    clearInterval(timer)
}

function timerDone(){
    clearInterval(timer);
    console.log('clear the timer')
    timeRunning= false;
    pauseTimer()
    //making the green circle red by adding the class 'ending'
    ring.classList.add('ending');

    setTimeout(()=>{
        alert('Time is Up!')
        resetTimer()
    },0)
}

//Reset the timer
function resetTimer(){
//remove the classname ending to the ring
ring.classList.remove('ending')
//reset the values of the minutes and seconds
console.log('seconds' ,seconds.value)
console.log('min' , minutes.value)

    seconds.value = originalSeconds;
    minutes.value = originalMinutes;
}

//add event listenter to the setttings button to allow users to modify the timer
settingsBtn.addEventListener('click', ()=>{
    console.log('edit btn')
    //if timer is running pause it
    if(timeRunning){
        pauseTimer()
    }
    minutes.disabled = false;
    seconds.disabled = false;
})

// //stop the user from inputting anything but a number
const validateTimeInput = (e) => {
    //anything but a number gets replaced by a 0
    const validatedInput = e.target.value.replace(/[^0-9]/g, 0)
    e.target.value = validatedInput;
}

minutes.addEventListener('keyup', validateTimeInput);
seconds.addEventListener('keyup', validateTimeInput);

const resetOriginalTime = () => {
    console.log(minutes.value)
    originalMinutes = parseInt(minutes.value);
    originalSeconds = parseInt(seconds.value);
}
resetOriginalTime()
//calling reset timer to give me the updated timer of 15 min
resetTimer();