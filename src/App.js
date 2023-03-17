import "./App.scss";
import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import DaylyWeather from "./components/TodayPerHour/DaylyWeather";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://45.146.166.156:5000/")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>...</div>;
  } else {
    return (
      <div className="App">
        <CurrentWeather
          temp={data.list[0].main.temp}
          feelsLike={data.list[0].main.feels_like}
          humidity={data.list[0].main.humidity}
          weather={data.list[0].weather[0].description}
          wind={data.list[0].wind.speed}
          list={data.list}
        />
        <DaylyWeather list={data.list} />
      </div>
    );
  }
}

export default App;
