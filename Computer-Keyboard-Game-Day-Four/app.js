//To Do
// grab reference to every key on the page and put it inan array 
const keyboardBtns =[...document.querySelectorAll('.key')];
console.log(keyboardBtns)
//give vale to each key using its dataset-key value
const keys = keyboardBtns.map(keyButton => keyButton.dataset.key);
console.log(keys)

//to DO determine which key is being pressed with a 'keyup' event