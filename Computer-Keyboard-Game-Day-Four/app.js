// grab reference to every key on the page and put it inan array 
const keyboardBtns =[...document.querySelectorAll('.key')];
console.log(keyboardBtns)
//give vale to each key using its dataset-key value
const keys = keyboardBtns.map(keyButton => keyButton.dataset.key);


// Mapping the value of the key with the button so I do not have to loop over every button when I want to remove or add the jiggle class to the current random key.. SEE Line 50 for previous working solution
const keyToButton = keyboardBtns.reduce((acc, cur)=>{
    //cur is the button, curKey is the key value of that btn
    const curKey = cur.dataset.key
    acc[curKey]=cur
    return acc
},{})

console.log(keyToButton)
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
    if(currentKey){
        //keytoButton is an object
        console.log(typeof keyToButton)
        keyToButton[currentKey].classList.remove('jiggle')
    }

    //create a random index based on the length of the keys array and create a random key based on that random index
    var randomIndex = Math.floor(Math.random() * keys.length)
    currentKey= keys[randomIndex]
    //adding the class jiggle to the new random key
        // keyboardBtns[randomIndex].classList.add('jiggle')
        keyToButton[currentKey].classList.add('jiggle')

        //looping over the keyboardBtns and adding class jiggle to the currentKey, else removing it... not as efficient as can be though.  
    // for(let i =0; i < keyboardBtns.length; i++){
    //     if(keyboardBtns[i].dataset.key=== currentKey){
    //         keyboardBtns[i].classList.add('jiggle')
    //     }else{
    //         keyboardBtns[i].classList.remove('jiggle')
    //     }
    // }
};


setRandomKey();