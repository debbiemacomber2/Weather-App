export default function WeatherInfo({ disCou }) {
  return (
    <section className="weatherInfo">
      {Object.keys(disCou).length === 0 ? (
        <p className="blink empty">
          Nothing to Show Here. Search for a county in the Input Field above to
          get information about it.
        </p>
      ) : (
        <article className="infoBox">
          <h2>{disCou.county && disCou.county + " " + "County"}</h2>
          <h3>Co-ordinates</h3>
          <p>
            Latitude:{" "}
            {disCou.latitude < 0
              ? Math.abs(disCou.latitude) + "\u00B0S"
              : disCou.latitude + "\u00B0N"}
          </p>
          <p>
            Longitude:{" "}
            {disCou.longitude < 0
              ? Math.abs(disCou.longitude) + "\u00B0S"
              : disCou.longitude + "\u00B0N"}
          </p>
        </article>
      )}
    </section>
  );
}
