import { useEffect, useState } from "react";

export default function AllCounties({ counties }) {
  const [allCou, setAllCou] = useState([]);

  useEffect(() => {
    const getAC = async () => {
      const promises = counties.map(async (county) => {
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              county.latitude
            }&lon=${county.longitude}&appid=${
              import.meta.env.VITE_WEATHER_TOKEN
            }&units=metric`
          );
          const data = await res.json();
          return { county, data };
        } catch (error) {
          console.log(error);
        }
      });

      const keptPromise = await Promise.all(promises);
      setAllCou(keptPromise);
    };

    getAC();
  }, []);

  return (
    <section className="weatherInfo">
      {allCou &&
        allCou.map((each, index) => {
          return (
            <div className="infoBox" key={index}>
              <article>
                <h2>{each.county.county} County</h2>
                <div className=" dif">
                  <p>
                    {each.county.latitude < 0
                      ? Math.abs(each.county.latitude) + "\u00B0S"
                      : each.county.latitude + "\u00B0N"}
                  </p>
                  <p>
                    {each.county.longitude < 0
                      ? Math.abs(each.county.longitude) + "\u00B0W"
                      : each.county.longitude + "\u00B0E"}
                  </p>
                </div>
              </article>

              <article>
                <h3 className="mainWeather">{each.data.weather[0].main}</h3>
                <p className="weatherDescription">
                  {each.data.weather[0].description}
                </p>
                <p>
                  {each.data.weather[0].main === "Clouds" &&
                    `${each.data.clouds.all}% cloudiness`}
                </p>
              </article>
              <article>
                <h3>Temprature</h3>

                <h4>{each.data.main.temp}&deg;C</h4>

                <h5>It feels like {each.data.main.feels_like}&deg;C</h5>
              </article>
              <article>
                <h3>Pressure</h3>
                <h4>{each.data.main.pressure} hPa</h4>
                <p>Sea Level: {each.data.main.sea_level} hPa</p>
                <p>Ground Level: {each.data.main.grnd_level} hPa</p>
              </article>
              <article>
                <h3>Wind</h3>
                <h4>{each.data.wind.speed}m/s</h4>
                <h4>
                  {each.data.wind.speed > 0 && `${each.data.wind.deg}\u00B0`}
                </h4>
                <p>
                  {each.data.wind.gust && `Gust: ${each.data.wind.gust}m/s`}
                </p>
              </article>
              <article>
                <h3>Humidity</h3>
                <h4>{each.data.main.humidity}%</h4>
              </article>
            </div>
          );
        })}
    </section>
  );
}
