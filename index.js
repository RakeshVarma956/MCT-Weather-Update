console.log("hello")
const inputlocation= document.getElementById("inputlocation")
console.log(inputlocation.value)

const result= document.getElementById("result")

async function searchlocation(){
    console.log()
    var value=inputlocation.value
    console.log(value)
    const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    console.log(res)

    const data= await res.json()
    console.log(data)

    result.style.backgroundColor="white"

    result.innerHTML=`<div class="name">
    <h3>Weather of  <h2 style="color:rgb(0,255,255)"> ${data.name}</h2></h3>
</div>
<div class="details">
  <div class="detailsLeft">
    <p>Sky Conditions </p>
    <p>Temperature </p>
    <p>Wind Speed </p>
    <p>Humidity <p>
    <p>Sunrise <p>
  </div>
  <div class="detailsRight">
    <p> : <a>${data.weather[0].description}</a></p>
    <p> :    <a>${data.main.temp}C</a></p>
    <p> : <a>${data.wind.speed} km/h </a></p>
    <p> : <a>${data.main.humidity} g/m3</a><p>
    <p> : <a>${convertMsToTime(data.sys.sunrise)} am</a><p>
  </div>
</div>`
  
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
  
    hours = hours % 24;
  
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds,
    )}`;
  }