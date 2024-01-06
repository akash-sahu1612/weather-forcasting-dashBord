


const aqiButton = document.getElementById('aqiButton');
const aqiText = document.getElementById('aqi');

aqiButton.addEventListener('click', function () {
    if (aqiText.textContent === '258 AQI Dangerous') {
        aqiText.textContent = 'Dust & Dander-Extreme';
    } else {
        aqiText.textContent = '258 AQI Dangerous';
    }
});
