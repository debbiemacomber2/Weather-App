import { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherInfo from "./components/Weather Info";
import SearchPlace from "./components/Search Place";
import Footer from "./components/Footer";

export default function App() {
  const counties = [
    { county: "Baringo", latitude: -0.5833, longitude: 36.05 },
    { county: "Bomet", latitude: -0.7833, longitude: 35.3333 },
    { county: "Bungoma", latitude: 0.5697, longitude: 34.5584 },
    { county: "Busia", latitude: 0.4347, longitude: 34.2422 },
    { county: "Elgeyo-Marakwet", latitude: 0.4737, longitude: 35.5569 },
    { county: "Embu", latitude: -0.5238, longitude: 37.4575 },
    { county: "Garissa", latitude: -0.4566, longitude: 39.6588 },
    { county: "Homa-Bay", latitude: -0.5204, longitude: 34.4577 },
    { county: "Isiolo", latitude: 0.3521, longitude: 37.5819 },
    { county: "Kajiado", latitude: -1.8531, longitude: 36.777 },
    { county: "Kakamega", latitude: 0.2827, longitude: 34.7519 },
    { county: "Kericho", latitude: -0.3675, longitude: 35.2881 },
    { county: "Kiambu", latitude: -1.1716, longitude: 36.8334 },
    { county: "Kilifi", latitude: -3.5102, longitude: 39.9093 },
    { county: "Kirinyaga", latitude: -0.4501, longitude: 37.274 },
    { county: "Kisii", latitude: -0.684, longitude: 34.7774 },
    { county: "Kisumu", latitude: -0.0917, longitude: 34.7679 },
    { county: "Kitui", latitude: -1.3662, longitude: 38.0117 },
    { county: "Kwale", latitude: -4.1755, longitude: 39.4583 },
    { county: "Laikipia", latitude: 0.4614, longitude: 37.1191 },
    { county: "Lamu", latitude: -2.1667, longitude: 40.8544 },
    { county: "Machakos", latitude: -1.5177, longitude: 37.2634 },
    { county: "Makueni", latitude: -1.8033, longitude: 37.6316 },
    { county: "Mandera", latitude: 3.9389, longitude: 41.8561 },
    { county: "Marsabit", latitude: 2.3331, longitude: 37.9982 },
    { county: "Meru", latitude: 0.3551, longitude: 37.7563 },
    { county: "Migori", latitude: -1.0633, longitude: 34.4737 },
    { county: "Mombasa", latitude: -4.0435, longitude: 39.6682 },
    { county: "Murang'a", latitude: -0.7833, longitude: 37.0333 },
    { county: "Nairobi", latitude: -1.2864, longitude: 36.8172 },
    { county: "Nakuru", latitude: -0.3031, longitude: 36.08 },
    { county: "Nandi", latitude: 0.178, longitude: 35.0925 },
    { county: "Narok", latitude: -1.0847, longitude: 35.8573 },
    { county: "Nyamira", latitude: -0.5707, longitude: 34.9354 },
    { county: "Nyandarua", latitude: -0.1819, longitude: 36.4403 },
    { county: "Nyeri", latitude: -0.4164, longitude: 37.0741 },
    { county: "Samburu", latitude: 1.2775, longitude: 37.803 },
    { county: "Siaya", latitude: -0.0607, longitude: 34.2422 },
    { county: "Taita-Taveta", latitude: -3.3161, longitude: 38.4852 },
    { county: "Tana-River", latitude: -1.2357, longitude: 40.3089 },
    { county: "Tharaka-Nithi", latitude: -0.2098, longitude: 37.8266 },
    { county: "Trans-Nzoia", latitude: 1.0364, longitude: 35.0064 },
    { county: "Turkana", latitude: 3.3382, longitude: 35.5971 },
    { county: "Uasin-Gishu", latitude: 0.5239, longitude: 35.2827 },
    { county: "Vihiga", latitude: 0.0733, longitude: 34.7243 },
    { county: "Wajir", latitude: 1.75, longitude: 40.0676 },
    { county: "West-Pokot", latitude: 1.2386, longitude: 35.1173 },
  ];

  const [disCou, setDisCou] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${disCou.latitude}&lon=${disCou.longitude}&appid=${process.env.WEATHER_TOKEN}&units=metric`
        );
        const data = await res.json();

        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [disCou]);

  return (
    <>
      <Header />

      <main>
        <SearchPlace
          counties={counties}
          disCou={disCou}
          setDisCou={setDisCou}
          setInfo={setInfo}
        />
        <WeatherInfo disCou={disCou} info={info} />
      </main>
      <Footer />
    </>
  );
}
