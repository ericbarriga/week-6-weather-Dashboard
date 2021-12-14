let srhBtn = document.querySelector('.button');
let input = document.querySelector('.input');




fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={f1f109703421f30f223da30762d78149}')

console.log(fetch);



// srhBtn.addEventListener('click', doSomething, false);


// function doSomething(e) {
//     console.log('yo');
// }