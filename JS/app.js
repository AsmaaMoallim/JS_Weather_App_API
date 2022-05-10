const cityForm = document.querySelector("Form");

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();

  cityForm.reset();

  // updata the url with new city

  updateCity(city);
});

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getConditions(cityDetails.Key)
  console.log(weather);
};
