import React from "react";
import "./Main.css";
import Form from "./Form/Form";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import photoWeather from '../../img/photoWeather.jpg';

const API_KEY = "27b7e68c367cbfb0d39414c60b2a2e5d";

class Main extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    city:undefined
    //mistake:undefined
  }


  gettingWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;

    if(!city){
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        sunrise: undefined,
        sunset: undefined,
        //mistake:undefined,
        error: "Введіть назву міста"
      });
  

  } 
  
//   else if (!city) {
//     this.setState({
//       temp: undefined,
//       city: undefined,
//       country: undefined,
//       pressure: undefined,
//       humidity: undefined,
//       sunrise: undefined,
//       sunset: undefined,
//       error:undefined,
//       mistake: "Введіть коректну назву міста"
//     });
// } 
else{
  const api_url = await
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
  const data = await api_url.json();

  let sunrise = data.sys.sunrise*1000;
  let date1 = new Date();
  date1.setTime(sunrise);
  let sunrise_date = date1.toLocaleTimeString();

  let sunset = data.sys.sunset*1000;
  let date = new Date();
  date.setTime(sunset);
  let sunset_date = date.toLocaleTimeString();

  let pressure = data.main.pressure;
  let pressureInMmHg = Math.floor(pressure * 0.75006);

  let temp = data.main.temp;
  let tempRound = Math.floor(temp)

  this.setState({
    temp: tempRound,
    city: data.name,
    country: data.sys.country,
    pressure: pressureInMmHg,
    humidity: data.main.humidity,
    sunrise: sunrise_date,
    sunset: sunset_date,
    error: undefined,
    //mistake:undefined
  });
  }
}
  render() {
    return (
      <div className='wrapperWeatherInfo'>
         <img src={photoWeather} className="" alt="" />
        <div className='weatherInfo'>
         
            <h2>Погода у вашому місці</h2>
          
          <div>
            <Form weatherMethod={this.gettingWeather} />

            <WeatherInfo
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
              //mistake= {this.state.mistake}
            />
          </div>
        </div>
      </div>

    );
  }
}

export default Main;