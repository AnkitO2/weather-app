import { useEffect } from "react";
import logo1 from "./images/search.png";
import logo2 from "./images/rain.png";
import logo3 from "./images/humidity.png";
import logo4 from "./images/wind.png";
import "./App.css";
function App() {
  
  useEffect(() => {
    const apiKey = "36db0f388fc11c82efe138d9e7f88033";
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q= &units=metric";
      

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();
      console.log(data);
      document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
          Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.main.speed + "km/h";
      });
      searchBtn.addEventListener(onclick={},()=>{
        checkWeather(searchBox.value);
      })
    }

    checkWeather();
  }, []);
  return (
    <body className="App">
      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="enter city name "
            spellCheck="false"
          />
          <button>
            <img src={logo1} alt=""/>
          </button>
        </div>
        <div className="weather">
          <img src={logo2} alt="" className="weather-icon"/>
          <h1 className="temp">22°C</h1>
          <h2 className="city">New York</h2>
          <div className="details">
            <div className="col">
              <img src={logo3} alt="" />
              <div>
                <p className="humidity">50%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={logo4} alt="" />
              <div>
                <p className="wind">15 km/h</p>
                <p>wind speed </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
