//selecting all the white keys and black keys and putting them in an array
const whiteKeys = [...document.querySelectorAll('path.white-keys')]
const blackKeys = [...document.querySelectorAll('path.black-keys')];

const allKeys = [...whiteKeys, ...blackKeys]
console.log(allKeys)

//write a function that will play the audio correleated to the key, then call that function when the key is pressed
const playAudio = async (index)=>{
   var audio = new Audio(`audio/key-${index}.mp3`);
    console.log("audio", audio);
    audio.play();
}
//for each key call the playAudio function
allKeys.forEach((key, i)=>{
    //assigning the index of each key i + 1 
    key.dataset.index = i +1
    key.addEventListener("click", (e)=>{
       const keyClicked = e.target.dataset.index
       console.log(keyClicked)
       playAudio(keyClicked)
    })
})



playAudio()