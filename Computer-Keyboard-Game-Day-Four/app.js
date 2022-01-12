// grab reference to every key on the page and put it inan array 
const keyboardBtns =[...document.querySelectorAll('.key')];
console.log(keyboardBtns)
//give vale to each key using its dataset-key value
const keys = keyboardBtns.map(keyButton => keyButton.dataset.key);


//determine which key is being pressed with a 'keyup' event
let currentKey;
document.body.addEventListener('keyup',(e)=>{
    console.log(e.key)
    const pressedKey = e.key
    checkKeyPressed(pressedKey)
});

//create a function that checks if the pressed key is === to the jiggling key
function checkKeyPressed(keyPressed){
    if(currentKey === keyPressed.toUpperCase() ){
        console.log('match')
        setRandomKey()
    }
}

//create a function that chooses a random key, and adds the jiggle class to it and removes the class from the previous jiggling key
function setRandomKey(){
    var randomIndex = Math.floor(Math.random() * keys.length)
    
    //removing prev jiggling key is NOT WORKING
    if(currentKey){
        keyboardBtns[randomIndex].classList.remove('jiggle')
    }
    //create a random index based on the length of the keys array and create a random key based on that random index
    var randomIndex = Math.floor(Math.random() * keys.length)
    currentKey= keys[randomIndex]
    //adding the class jiggle to the new random key
    keyboardBtns[randomIndex].classList.add('jiggle')
};


setRandomKey();