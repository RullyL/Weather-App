const apiKey = '8530fadeb64404188ef99176f06f40dc'; 

document.getElementById('searchBtn').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = data.name;
                document.getElementById('country').textContent = `${data.sys.country}`;
                document.getElementById('temperature').textContent = `${data.main.temp} °C`;
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            } else {
                document.getElementById('cityName').textContent = 'City not found';
                document.getElementById('temperature').textContent = '';
                document.getElementById('description').textContent = '';
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}
