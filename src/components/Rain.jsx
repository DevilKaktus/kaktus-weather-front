export default function Rain({ list }) {
  if (list[0].weather[0].main === "Rain") {
    let counter = 2;
    for (let e of list) {
      if (e.weather[0].main === "Rain") {
        counter += 3;
      } else break;
    }
    return (
      <div>
        <span>Дождь закончится через {counter} часа(ов)</span>
      </div>
    );
  } else {
    let counter = 0;
    for (let e of list) {
      if (e.weather[0].main === "Rain") {
        break;
      } else {
        counter += 3;
      }
    }
    return (
      <div>
        <span>Дождь будет через {counter} часа(ов)</span>
      </div>
    );
  }
}
