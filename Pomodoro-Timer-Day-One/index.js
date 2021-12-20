console.log('js attached')

const startBtn = document.querySelector('.start')
const settingsBtn = document.querySelector('.settings')
const minutes = document.querySelector('.minutes > input[type=text]').value
const seconds = document.querySelector('.seconds > input[type=text]').value

let timeRunning = false;

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
 
}
function stopTimer(){
    console.log('timer stopped')
    startBtn.innerHTML="Start"
}