import React from "react";
import clear_night from "../../assets/weather_icons/clear_night.svg";
// import cold from "../../assets/weather_icons/cold.svg";
// import hot from "../../assets/weather_icons/hot.svg";
// import lightning from "../../assets/weather_icons/lightning.svg";
import cloudy from "../../assets/weather_icons/cloudy.svg";
import foggy from "../../assets/weather_icons/smog_solid.svg";
import partly_cloudy_night from "../../assets/weather_icons/partly_cloudy_night.svg";
import partly_cloudy from "../../assets/weather_icons/partly_cloudy.svg";
import rainy from "../../assets/weather_icons/rainy.svg";
import showers_night from "../../assets/weather_icons/showers_night.svg";
import showers from "../../assets/weather_icons/showers.svg";
// import snow_showers from "../../assets/weather_icons/snow_showers.svg";
import snow from "../../assets/weather_icons/snow.svg";
import sunny from "../../assets/weather_icons/sunny.svg";
import thunder from "../../assets/weather_icons/thunder.svg";
// import windy from "../../assets/weather_icons/windy.svg";

const checkicon = (icon) => {
  switch (icon) {
    case "01d":
      return <img src={sunny} alt='sunny' />;
      break;
    case "01n":
      return <img src={clear_night} alt='clear night' />;
      break;
    case "02d":
      return <img src={partly_cloudy} alt='partly cloudy' />;
      break;
    case "02n":
      return <img src={partly_cloudy_night} alt='partly cloudy night' />;
      break;
    case "03d":
      return <img src={cloudy} alt='cloudy' />;
      break;
    case "03n":
      return <img src={cloudy} alt='cloudy night' />;
      break;
    case "04d":
      return <img src={partly_cloudy} alt='partly cloudy' />;
      break;
    case "04n":
      return <img src={partly_cloudy_night} alt='partly cloudy night' />;
      break;
    case "09d":
      return <img src={showers} alt='showers' />;
      break;
    case "09n":
      return <img src={showers_night} alt='showers night' />;
      break;
    case "10d":
      return <img src={rainy} alt='rainy' />;
      break;
    case "10n":
      return <img src={rainy} alt='rainy' />;
      break;
    case "11d":
      return <img src={thunder} alt='thunder' />;
      break;
    case "11n":
      return <img src={thunder} alt='thunder' />;
      break;
    case "13d":
      return <img src={snow} alt='snow' />;
      break;
    case "13n":
      return <img src={snow} alt='snow' />;
      break;
    case "50d":
      return <img src={foggy} alt='foggy' />;
      break;
    case "50n":
      return <img src={foggy} alt='foggy' />;
      break;
    default:
      return <img alt="loading..."/>
  }
};

const IconContainer = ({ icon }) => {
  return <div>{checkicon(icon)}</div>;
};

export default IconContainer;
