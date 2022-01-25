const daysOfWeekMap = {
    0: 'SUN', 
    1: 'MON', 
    2: 'TUES', 
    3: 'WED', 
    4: 'THUR', 
    5: 'FRI', 
    6: 'SAT'
}

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166},
    sunny: { width: 208, height: 213},
    stormy: { width: 246, height: 187},
    snowy: { width: 230, height: 196},
    'partly-cloudy': {width: 230, height:209},
    rainy: { width: 160, height: 222},
}
const lat = '32.7157'
const lon ='117.61'
const apiKey='6845bd9653c312c4a4d4b0a988d5d986'

const getWeatherData= async ()=>{
    try{
        const response =await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(error)
    }
}
  getWeatherData()