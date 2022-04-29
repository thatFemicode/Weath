import React, { useRef } from "react";
import { useGlobalContext } from "../../Context/Context";
import useWeather from "../../Hooks/useWeather";
import { WeatherDetailsStyled, ButtonStyled } from "./WeatherDetailsStyled";

const WeatherDetails = () => {
  const locationRef = useRef(null);
  const { setLocation, loading } = useGlobalContext();
  const { weather } = useWeather();
  const generateWeather = (e) => {
    e.preventDefault();
    setLocation(locationRef.current.value);
    locationRef.current.value = "";
  };

  return (
    <WeatherDetailsStyled>
      <div className="weather-content">
        <div className="details">
          {loading ? (
            "Loading..."
          ) : (
            <div className="top">
              <div className="top-main">
                <div className="location">
                  <p>{weather.name}</p>
                </div>
                <div className="description">
                  {weather.weather ? (
                    <p>Sky: {weather.weather[0].main}</p>
                  ) : (
                    <p>City not found</p>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="bottom">
            <div className="temp">
              {weather.main ? <h1>{weather.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="bottom-main">
              <div className="feels">
                {weather.main ? (
                  <p className="bold">{weather.main.feels_like.toFixed()}°F</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {weather.main ? (
                  <p className="bold">{weather.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {weather.wind ? (
                  <p className="bold">{weather.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <form>
            <input type="text" placeholder="city location" ref={locationRef} />
            <ButtonStyled onClick={generateWeather}>Submit</ButtonStyled>
          </form>
        </div>
      </div>
    </WeatherDetailsStyled>
  );
};

export default WeatherDetails;
