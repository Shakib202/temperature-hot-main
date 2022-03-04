const API_KEY = `3a4bd183d41fb32a798f80ac7587a789`;
const searchTemperature = () => {
  // openweathermap.org/data/2.5/weather?lat={lat}&lon
  const city = document.getElementById('city-name').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
  .then(res => res.json())
  .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
  setInnerText('city', temperature.name);
  setInnerText('temperature', temperature.main.temp);
  setInnerText('condition', temperature.weather[0].main);
  // set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imagIcon = document.getElementById('weather-icon');
  imagIcon.setAttribute('src', url);
}