function getWeather() {
  const apiKey = '63fdc3435ba8d05cf26efa4a44d0be8d';
  const city = document.getElementById('cityInput').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const weatherContainer = document.getElementById('weather-container');
          const cityElement = document.getElementById('city');
          const temperatureElement = document.getElementById('temperature');
          const descriptionElement = document.getElementById('description');
          const iconElement = document.getElementById('icon');
          const detailsElement = document.getElementById('details');

          weatherContainer.style.display = 'inline-block';
          cityElement.textContent = data.name;
          temperatureElement.textContent = `${data.main.temp}°C`;
          descriptionElement.textContent = data.weather[0].description;
          iconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

          const detailsText = `Humidity: ${data.main.humidity}% | Wind Speed: ${data.wind.speed} m/s`;
          detailsElement.textContent = detailsText;
      })
      .catch(error => console.error('Error fetching weather data:', error));
}