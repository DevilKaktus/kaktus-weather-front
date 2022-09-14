import "./CurrentWeather.scss";
import Rain from "./Rain";

export default function CurrentWeather({
  temp,
  feelsLike,
  humidity,
  weather,
  wind,
  list,
}) {
  temp = temp.toString().split(".")[0];
  const weatherUpperCased = weather[0].toUpperCase() + weather.slice(1);
  return (
    <div className="current-weather-wrapper">
      <div className="element element-current"></div>
      <div className={"current-weather-container"}>
        <div className={"weather-block"}>
          <div className={"weather-block__temp"}>
            <span>{temp}&deg;C</span>
            <div className={"weather-block__feels-like"}>
              <span>Ощущается как: {feelsLike}</span>
            </div>
          </div>

          <div className={"weather-block__humidity"}>
            <span>Влажность:</span>
            <span className={"big-number"}>{humidity}%</span>
          </div>
          <div className={"weather-block__weather"}>
            <span>{weatherUpperCased}</span>
          </div>
          <div className={"weather-block__wind"}>
            <span>Скорость ветра:</span>
            <div className={"medium-number"}>
              <span className={"big-number"}>{wind}</span> м/с
            </div>
          </div>
        </div>
        <Rain className={"rain"} list={list} />
      </div>
    </div>
  );
}
