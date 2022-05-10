const cityForm = document.querySelector("Form");

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();

  cityForm.reset();

  // updata the ui with new city
  updateCity(city)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getConditions(cityDetails.Key);
  //   console.log(weather);
  return {
    cityDetails: cityDetails,
    weather: weather,
  };
};
