let btn = document.querySelector('.button')
let inputValue = document.querySelector('.input')
let temp = document.querySelector('.temp')
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity')
let uv = document.querySelector('.uv')
let cityName = document.querySelector('.cityName')
let m = moment().format('MM-DD-YYYY')
console.log(m);


btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=c5a75995c194b2ad9d45ac9d28b02699')
        .then(response => response.json())
        .then(data => {
            let tempValue = data['main']['temp'];
            let windValue = data['wind']['speed'];
            let humidityValue = data['main']['humidity']
            let nameValue = data['name']
            console.log(data);

            temp.innerHTML = tempValue;
            wind.innerHTML = windValue, 'wind speed';
            humidity.innerHTML = humidityValue;
            cityName.innerHTML = nameValue + ` ` + m;
        })

        .catch(err => alert('city does not exist'))
})


// api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=c5a75995c194b2ad9d45ac9d28b02699/// call for city
// c5a75995c194b2ad9d45ac9d28b02699// my api keys 