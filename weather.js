

const city = process.argv[2]; 
const API_KEY = "6f1c8eb11eb9e72dc5b3e4ac27e7ba31"; 

async function getWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(`\nWeather in ${data.name}, ${data.sys.country}`);
    console.log(`🌡 Temp: ${data.main.temp}°C`);
    console.log(`💧 Humidity: ${data.main.humidity}%`);
    console.log(`🌬 Wind: ${data.wind.speed} m/s`);
    console.log(`🌤 Condition: ${data.weather[0].description}`);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

getWeather(city);
