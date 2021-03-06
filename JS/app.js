const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img");
const forocast = new Forocast();


const updateUI = (data) => {
  console.log(data);

  const { cityDetails, weather } = data;

  // update details
  details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>`;

  let timeSrc = null;

  // weather.IsDayTime ? (timeSrc = "img/day.svg") : (timeSrc = "img/night.svg");
  timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";

  // if (weather.IsDayTime) {
  //   timeSrc = "img/day.svg";
  // } else {
  //   timeSrc = "img/night.svg";
  // }

  time.setAttribute("src", timeSrc);

  let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  if (card.classList.contains("d-none")) {
    card.classList.toggle("d-none");
  }
};

// const updateCity = async (city) => {
//   const cityDetails = await getCity(city);
//   const weather = await getConditions(cityDetails.Key);
//   //   console.log(weather);
//   return { cityDetails, weather };
// };

const refresh = (city) => {
  forocast.updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();

  localStorage.setItem("city", city);

  cityForm.reset();

  // updata the ui with new city
  refresh(city);
});



const city = localStorage.getItem("city");

if (city) {
  refresh(city);
}
