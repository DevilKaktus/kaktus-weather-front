import DaylyWeatherCard from "./DaylyWeatherCard";
import "./DaylyWeather.scss";

export default function DaylyWeather({ list }) {
  let daysList = [];

  if (list.length) {
    // eslint-disable-next-line
    daysList = list.filter((data) => {
      if (data.dt_txt.slice(11, 16) === "12:00") {
        return true;
      }
    });
  }

  return (
    <div className="dayly-weather-wrapper">
      {list.length &&
        daysList.map((data) => {
          return (
            <DaylyWeatherCard
              key={data.dt}
              date={data.dt_txt}
              temp={data.main.temp}
              feelsLike={data.main.feels_like}
              humidity={data.main.humidity}
              weather={data.weather[0].description}
              wind={data.wind.speed}
            />
          );
        })}
    </div>
  );
}
