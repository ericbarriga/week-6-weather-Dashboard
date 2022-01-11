let btn = document.querySelector('.button')
let inputValue = document.querySelector('.input')
let temp = document.querySelector('.temp')
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity')
let uv = document.querySelector('.uv')
let cityName = document.querySelector('.cityName')
let m = moment().format('MM-DD-YYYY')
let forcastContainer = document.querySelector('#forcast')
//console.log(m);

const endpoint = 'http://api.openweathermap.org/data/2.5/weather'
const forcastEndpoint = 'https://api.openweathermap.org/data/2.5/onecall'

function currentWeather(cityName) {
    let searchcity = cityName ? cityName : 'denver'
    fetch(`${endpoint}?q=${searchcity}&units=imperial&appid=c5a75995c194b2ad9d45ac9d28b02699`)
        .then(blob => blob.json())
        .then(city => {

            //console.log(city);
            fillcurrentWeather(city)
            forecast(city.coord.lat, city.coord.lon)
        })
}

function fillcurrentWeather(data) {
    let tempValue = data['main']['temp'];
    let windValue = data['wind']['speed'];
    let humidityValue = data['main']['humidity']
    let nameValue = data['name']


    temp.innerHTML = `temp: ${tempValue}`;
    wind.innerHTML = ` wind: ${windValue}`;
    humidity.innerHTML = `humidity: ${humidityValue}%`;
    cityName.innerHTML = nameValue + ` ` + m;
}

function forecast(lat, lon) {

    fetch(`${forcastEndpoint}?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=c5a75995c194b2ad9d45ac9d28b02699`)
        .then(blob => blob.json())
        .then(weather => {

            console.log(weather);
            fillForecast(weather)

        })
}

function fillForecast(data) {
    forcastContainer.innerHTML = ''
    //  console.log(data.daily);
    let fiveDay = data.daily.slice(1, 6)
    //  console.log(fiveDay);
    for (let i = 0; i < fiveDay.length; i++) {
        let day = fiveDay[i]
        let dayDiv = document.createElement('div')
        dayDiv.classList.add('column')
        dayDiv.innerHTML = `
        <h2>${moment(day.dt * 1000).format('dddd')}</h2>
        <p>high: ${day.temp.max}</p>
        <p>low: ${day.temp.min}</p>
        <p> wind: ${day.wind_speed}</p>
        <p>humidity: ${day.humidity}</p>
        <p>uv: ${day.uvi}</p>
        `

        forcastContainer.append(dayDiv)
        //console.log(moment(day.dt * 1000).format('dddd'));

    }
}

currentWeather()

btn.addEventListener('click', function (e) {
    currentWeather(inputValue.value)
})



// api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=c5a75995c194b2ad9d45ac9d28b02699/// call for city
// c5a75995c194b2ad9d45ac9d28b02699// my api keys 
//  api.openweathermap.org/data/2.5/forecast?q=denver&units=imperial&appid=c5a75995c194b2ad9d45ac9d28b02699