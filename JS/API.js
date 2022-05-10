const key = "7GJTsEjNNV4P1SPf9yjEsgzGpGKLCEQG";

const getCity = async (cityName) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${cityName}`;

  const response = await fetch(base + query);

  const data = await response.json();

  return data[0]
//   console.log(data[0]);
};

const getConditions = async (locationKey) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
  const query = `?apikey=${key}`

  const response = await fetch(base + query);

  const data = await response.json();

  console.log(data);
};


// getCity('unayzah').then(data => console.log(data)).catch(err =>console.log(err))

