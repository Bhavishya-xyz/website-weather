const API_KEY = "YOUR_API_KEY";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("city").innerText =
            data.name + ", " + data.sys.country;

        document.getElementById("temperature").innerText =
            Math.round(data.main.temp) + " °C";

        document.getElementById("description").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            data.main.humidity + "%";

        document.getElementById("wind").innerText =
            data.wind.speed + " m/s";

        document.getElementById("feels").innerText =
            Math.round(data.main.feels_like) + " °C";

        const weather = data.weather[0].main;

        let icon = "🌤️";

        if (weather === "Clear") {
            icon = "☀️";
        }
        else if (weather === "Clouds") {
            icon = "☁️";
        }
        else if (weather === "Rain") {
            icon = "🌧️";
        }
        else if (weather === "Thunderstorm") {
            icon = "⛈️";
        }
        else if (weather === "Snow") {
            icon = "❄️";
        }
        else if (weather === "Mist" || weather === "Fog") {
            icon = "🌫️";
        }

        document.getElementById("icon").innerText = icon;

    }
    catch (error) {

        alert("City not found. Please check the city name.");

    }
}
