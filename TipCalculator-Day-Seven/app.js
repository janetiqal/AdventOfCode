const billAmount =document.querySelector('#bill-amount')
const numOfPplDining = document.querySelector('#number-of-people')
const tipAmt =document.querySelector('#tip-amount')
const tipPerPerson =document.querySelector('#total-per-person')
const calculateButton = document.querySelector('#calculate')
console.log(calculateButton);

calculateButton.addEventListener('click', function(){
    console.log('btn clicked');
    //get the value of the tip percentage and the bill amount
    const billTotal = billAmount.value
    const tipButton= document.querySelector('input[name="tip"]:checked')
    //removing the % that is attached the value of the tip using slice and turning the string to a num
    const tipPercentage= Number(tipButton.value.slice(0,-1)/100)
    console.log(tipPercentage);

})