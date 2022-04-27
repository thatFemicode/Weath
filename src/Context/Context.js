import React, { useState, useContext, useEffect, useCallback } from "react";
import axios from "axios";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  let initialTime = new Date();
  let initialTimeHour = initialTime.getHours();
  let initialTimeMinutes = initialTime.getMinutes();

  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("Hello");
  const [currentHour, setCurrentHour] = useState(initialTimeHour);
  const [currentMinute, setCurrentMinute] = useState(initialTimeMinutes);
  const [icon, setIcon] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const greetings = {
    morning: {
      label: "morning",
      icon: "sun",
      bgImage: "daylight",
    },
    afternoon: {
      label: "afternoon",
      icon: "sun",
      bgImage: "daylight",
    },
    evening: {
      label: "evening",
      icon: "moon",
      bgImage: "starlight",
    },
  };
  const getCurrentTime = () => {
    const now = new Date();
    setCurrentHour(now.getHours());
    setCurrentMinute(now.getMinutes());
  };
  const showGreeting = useCallback(
    (hour) => {
      if (hour === 0 || hour < 6) {
        setGreeting(`Good ${greetings.evening.label}`);
        setIcon(greetings.evening.icon);
        setBackgroundImage(greetings.evening.bgImage);
      } else if (hour < 12) {
        setGreeting(`Good ${greetings.morning.label}`);
        setIcon(greetings.morning.icon);
        setBackgroundImage(greetings.morning.bgImage);
      } else if (hour < 18) {
        setGreeting(`Good ${greetings.afternoon.label}`);
        setIcon(greetings.afternoon.icon);
        setBackgroundImage(greetings.afternoon.bgImage);
      } else if (hour < 25) {
        setGreeting(`Good ${greetings.evening.label}`);
        setIcon(greetings.evening.icon);
        setBackgroundImage(greetings.evening.bgImage);
      }
    },
    [
      greetings.evening.label,
      greetings.evening.icon,
      greetings.evening.bgImage,
      greetings.morning.label,
      greetings.morning.icon,
      greetings.morning.bgImage,
      greetings.afternoon.label,
      greetings.afternoon.icon,
      greetings.afternoon.bgImage,
    ]
  );
  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get("https://freegeoip.app/json/");
      setLocation(response.data.city);
      setCity(response.data.city);
      setRegion(response.data.region_code);
    };
    fetchLocation();
    let mounted = true;
    if (mounted && currentHour >= 0) {
      // specify currentHour else 0 == false
      showGreeting(currentHour);
      // update current time every second
      setInterval(() => {
        getCurrentTime();
      }, 1000);
    }
  }, [currentHour, showGreeting]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        currentHour,
        currentMinute,
        location,
        setLocation,
        region,
        city,
        greeting,
        icon,
        backgroundImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
