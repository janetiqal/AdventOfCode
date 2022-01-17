const sliderValue = document.querySelector('#priceRange')
const outputValue = document.querySelector('.dollars')

//displays the default slider value
outputValue.innerHTML= sliderValue.value


sliderValue.oninput= function(){
    console.log('slider is being moved')
    outputValue.innerHTML = sliderValue.value
}
