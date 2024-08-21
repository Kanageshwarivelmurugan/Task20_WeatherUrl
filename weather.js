document.addEventListener('DOMContentLoaded', () => {
    
    const weatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${weatherApiKey}`;


    function fetchWeather() {
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                const weatherDataContainer = document.getElementById('weather-data');
                weatherDataContainer.innerHTML = `
                <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('weather-data').innerHTML = '<p>Failed to load weather data.</p>';
            });
    }
    fetchWeather();
});