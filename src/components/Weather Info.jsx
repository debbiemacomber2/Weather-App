export default function WeatherInfo({ disCou, info }) {
  return (
    <section className="weatherInfo">
      {!disCou ? (
        <p className="blink empty">
          Nothing to Show Here. Search for a county in the Input Field above to
          get information about it.
        </p>
      ) : (
        info && (
          <div className="infoBox">
            <article>
              <h2 className="county">
                {disCou.county && disCou.county + " " + "County"}
              </h2>
              <div className="coordinates">
                <p>
                  {disCou.latitude < 0
                    ? Math.abs(disCou.latitude) + "\u00B0S"
                    : disCou.latitude + "\u00B0N"}
                </p>
                <p>
                  {disCou.longitude < 0
                    ? Math.abs(disCou.longitude) + "\u00B0S"
                    : disCou.longitude + "\u00B0N"}
                </p>
              </div>
              <h3 className="mainWeather">{info.weather[0].main}</h3>
              <p className="weatherDescription">
                {info.weather[0].description}
              </p>
              <p>
                {info.weather[0].main === "Clouds" &&
                  `${info.clouds.all}% cloudiness`}
              </p>
            </article>

            <article>
              <h3>Temprature</h3>

              <h4>{info.main.temp}</h4>

              <h5>It feels like {info.main.feels_like}</h5>
            </article>

            <article>
              <h3>Pressure</h3>
              <h4>{info.main.pressure}hPa</h4>
              <p>Sea Level: {info.main.sea_level}</p>
              <p>Ground Level: {info.main.grnd_level}</p>
            </article>

            <article>
              <h3>Wind</h3>
              <h4>{info.wind.speed}m/s</h4>
              <h4>{info.wind.speed > 0 && `${info.wind.deg}\u00B0`}</h4>
              <p>{info.wind.gust && `Gust:${info.wind.gust}m/s`}</p>
            </article>

            <article>
              <h3>Humidity</h3>
              <h4>{info.main.humidity}%</h4>
            </article>
          </div>
        )
      )}
    </section>
  );
}
