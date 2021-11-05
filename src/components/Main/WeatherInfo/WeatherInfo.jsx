import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = (props) => (
  <div className='wrapperDataWeather'>
  {props.city &&
    <div className='dataWeather'>
      <p>Температура: {props.temp} °C</p>
      <p>Місто: {props.city}, {props.country}</p>
      <p>Вологість: {props.humidity} %</p>
      <p>Тиск: {props.pressure} мм.рт.ст</p>
      <p>Схід сонця: {props.sunrise}</p>
      <p>Захід сонця: {props.sunset}</p>
      <p></p>
      <p></p>
    </div>
  }
  <p className='infoError'>{props.error}</p>
  {/* <p className=''>{props.mistake}</p> */}
</div>
)

export default WeatherInfo;