function Weather(props) {
  return (
    <>
      <img
        src={`img/weather/${props.weather}.png`}
        alt=""
        onClick={(e) => {
          props.changeWeather(e);
          props.setWeatherRemove((prev) => !prev);
        }}
      />
    </>
  );
}

export default Weather;
