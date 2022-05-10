const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const { cityDetails, weather } = data;

  // update details
  details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>`;

  if (card.classList.contains("d-none")){
    card.classList.toggle("d-none");
  } 
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getConditions(cityDetails.Key);
  //   console.log(weather);
  return { cityDetails, weather };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();

  cityForm.reset();

  // updata the ui with new city
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});

 