const sliderValue = document.querySelector('#priceRange')
const outputValue = document.querySelector('.dollars')

//displays the default slider value
outputValue.innerHTML= formatDollarAmt(sliderValue.value)

function formatDollarAmt(input){
    // price is in cents, 
    const formatDollar =(input /100).toFixed(2)
    return formatDollar;   
}
sliderValue.oninput= function(){
    outputValue.innerHTML = formatDollarAmt(sliderValue.value)
}