import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(true);
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&exclude=minutely,hourly,daily,alerts&appid=${process.env.REACT_APP_OWEATHER_API_KEY}`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setWeatherData(data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return <div>{console.log(weatherData)}</div>;
};

export default App;
