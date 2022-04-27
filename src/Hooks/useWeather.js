import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../Context/Context";
const useWeather = () => {
  const { location, setLoading, setError } = useGlobalContext();
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
  // const url = `https://api.genderize.io?name=${location}`;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setWeather(response.data);
        // console.log(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [url, setError, setLoading, location]);

  return { weather };
};

export default useWeather;
