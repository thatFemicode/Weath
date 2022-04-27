import { useState, useEffect } from "react";
import axios from "axios";
const useLocal = () => {
  const url = "https://freegeoip.app/json/";
  const [local, setLocal] = useState({});
  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(url);
      setLocal(response.data);
      console.log(response);
    };
    fetchLocation();
  }, [url]);

  return local;
};
export default useLocal;
