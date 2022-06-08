// change it to class ..
class Forocast {
  constructor() {
    this.key = "7GJTsEjNNV4P1SPf9yjEsgzGpGKLCEQG";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    this.conditionURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
  }

  async updateCity(city) {
    const cityDetails = await this.getCity(city);
    const weather = await this.getConditions(cityDetails.Key);
    //   console.log(weather);
    return { cityDetails, weather };
  }

  async getCity(cityName) {
    const query = `?apikey=${this.key}&q=${cityName}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
    //   console.log(data[0]);
  }

  async getConditions (locationKey) {
  const query = `${locationKey}?apikey=${this.key}`;
  const response = await fetch(this.conditionURI + query);
  const data = await response.json();

  return data[0];

  //   console.log(data);
};
}

// const key = "7GJTsEjNNV4P1SPf9yjEsgzGpGKLCEQG";

// const getCity = async (cityName) => {
//   const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?apikey=${key}&q=${cityName}`;

//   const response = await fetch(base + query);

//   const data = await response.json();

//   return data[0];
//   //   console.log(data[0]);
// };

// const getConditions = async (locationKey) => {
//   const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//   const query = `${locationKey}?apikey=${key}`;

//   const response = await fetch(base + query);

//   const data = await response.json();

//   return data[0];

//   //   console.log(data);
// };

// getCity('unayzah').then(data => console.log(data)).catch(err =>console.log(err))
// getCity('unayzah').then(data => getConditions(data.Key)).then(data => console.log(data)).catch(err =>console.log(err))
