export default function DaylyWeatherCard({
  date,
  temp,
  feelsLike,
  humidity,
  weather,
  wind,
}) {
  temp = temp.toString().split(".")[0];
  let formatedDate =
    date.slice(8, 10) + "." + date.slice(5, 7) + "." + date.slice(0, 4);
  return (
    <div className={"daylyweathercard-wrapper"}>
      <div className="element element-dayly"></div>
      <div className={"daylyweathercard-container"}>
        <div className={"daylyweathercard daylyweathercard-date"}>
          {formatedDate}
        </div>
        <div className={"daylyweathercard-container__inner"}>
          <div className={"daylyweathercard daylyweathercard-temp"}>
            <div className={"big-number "}>{temp}&deg;C</div>
            <div className={"daylyweathercard daylyweathercard-feelslike"}>
              Ощущается как {feelsLike.toString().split(".")[0]}&deg;C
            </div>
          </div>
          <div className={"daylyweathercard daylyweathercard-humidity"}>
            Влажность: {humidity}%
          </div>
          <div className={"daylyweathercard daylyweathercard-weather"}>
            {weather[0].toUpperCase() + weather.slice(1)}
          </div>
          <div className={"daylyweathercard daylyweathercard-wind"}>
            {wind}м/с
          </div>
        </div>
      </div>
    </div>
  );
}
// date.replace(/-/gi, ".").slice(0,10)
