export default function Header({ disCou }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo ">Weather App</h1>
        <h3>Get weather information of any of the 47 counties in Kenya</h3>
      </div>

      {disCou && (
        <div>
          <h1 className="county">
            {disCou.county && disCou.county + " " + "County"}
          </h1>

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
        </div>
      )}
    </header>
  );
}
