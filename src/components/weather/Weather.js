import React from "react";
// import PropTypes from "prop-types";
import IconContainer from "../weather/IconContainer";
import Spinner from "../layout/Spinner";

const Weather = ({ weatherData }) => {
  if (weatherData.hasOwnProperty("current")) {
    const {
      dt,
      dew_point,
      feels_like,
      humidity,
      pressure,
      sunrise,
      sunset,
      temp = 0,
      uvi,
      wisibility,
      wind_deg,
      wind_gust,
      wind_speed,
    } = weatherData.current;
    const { description, icon } = weatherData.current.weather[0];
    const { lat, lon } = weatherData;

    return (
      <div className='container mainWeatherComponent text-primary'>
        <div className='iconContainer'>
          <IconContainer icon={icon} />
        </div>
        <div className='big-text'>
          <p>
            {Math.round(((+temp - 32) * 5) / 9)}
            <span>°C</span>
          </p>
        </div>
        <div>
          <p className='capitalize'>{description}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {Math.round(wind_speed)}mph</p>
        </div>
        <p>Lat: {lat}<br/> Lon: {lon}</p>
      </div>
    );
  } else {
    return <Spinner />;
  }
};

// Weather.propTypes = {
//   weatherData: PropTypes.object.isRequired,
// };

export default Weather;
