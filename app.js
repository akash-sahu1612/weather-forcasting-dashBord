
// let aqiButton=document.querySelector("#seeMore");
// let aqi=document.querySelector("#mid-fourth-para");

// aqi.addEventListener("keypress",function(event){
// aqi.innerHTML="Dust & Dander <br> Extreme";
// });

const aqiButton = document.getElementById('aqiButton');
const aqiText = document.getElementById('aqi');

aqiButton.addEventListener('click', function () {
    if (aqiText.textContent === '258 AQI Dangerous') {
        aqiText.textContent = 'Dust & Dander-Extreme';
    } else {
        aqiText.textContent = '258 AQI Dangerous';
    }
});