const daysElements = [...document.querySelectorAll('.day')]

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
        const response =await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
        const data = await response.json()
        console.log(data);
        const returnData = data.daily.map(dayWeather =>{
            let weatherDescription="sunny";
            console.log(dayWeather);
            if(dayWeather.weather[0].main==='Clear'){
                weatherDescription='clear'
            }else if(dayWeather.weather[0].main==='Cloud'){
                weatherDescription='cloudy'
            }else if(dayWeather.weather[0].main==='Rain'){
                weatherDescription='rainy'
            }else if(dayWeather.weather[0].main==='Snow'){
                weatherDescription='snowy'
            }
            //creating an object with all the relevant data we want for each day in a week
            const objectData = {
                minTemp: Math.round(dayWeather.temp.min),
                maxTemp: Math.round(dayWeather.temp.max),
                dayTemp: Math.round(dayWeather.temp.day),
                pop: dayWeather.pop * 100 ,
                weatherDescription
            }
            console.log(objectData);
            return objectData
        })
        console.log(returnData);

        return returnData
    }
    catch(error){
        console.log(error)
    }
}
//toDO

//CHANGE THE UI based on the data coming 
const updateUI= (data)=>{
console.log('heu',daysElements);
    //loop through the day elements and set up for mapping of weather data
}

updateUI()
  getWeatherData()