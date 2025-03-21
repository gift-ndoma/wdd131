const temperature = 37;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        wind_chill = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))
        wind_chill = wind_chill.toFixed(0)
        return wind_chill + "°C"
    } else {
        wind_chill = "N/A"
        return wind_chill
    }
};

windChil = calculateWindChill(temperature, windSpeed);
const windChill = document.querySelector("#windchill");
windChill.textContent = windChil;