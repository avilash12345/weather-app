/*alert("hello world")
prompt("enter your code")*/

const button = document.querySelector('.submit');
const inputvalue =document.querySelector('.inputvalue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');




button.addEventListener('click',function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=a6ff84bb9f0e124600b33862f3e66db3')
.then(response=>response.json())
.then(data =>{
    
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    var tempvalue=tempValue-273.15;

    name.innerHTML = nameValue;
    temp.innerHTML = tempvalue;
    desc.innerHTML = descValue;
} )




.catch(err =>alert("wrong city name"));

})