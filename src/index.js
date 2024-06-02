const cities = require("../data/cities.json");

function getAllPlaces() {
  return cities;
}

function getCitieByZipCode(zipCode) {
  return cities.find((city) => city.zipCode === zipCode);
}

function getAllCitiesFromCommunity(community) {
  const filteredCities = cities.filter((city) => city.community === community);
  const uniqueCityNames = new Set();

  const uniqueCities = filteredCities.filter((city) => {
    if (!uniqueCityNames.has(city.city)) {
      uniqueCityNames.add(city.city);
      return true;
    }
    return false;
  });
  const numberCities = uniqueCities.length;

  return { uniqueCities, numberCities };
}
function getAllCities() {
  const uniqueCityNames = new Set();
  const uniqueCities = [];

  cities.forEach((city) => {
    if (!uniqueCityNames.has(city.city)) {
      uniqueCityNames.add(city.city);
      uniqueCities.push(city);
    }
  });

  const numberCities = uniqueCities.length;
  return { uniqueCities, numberCities };
}

module.exports = {
  getAllPlaces,
  getAllCities,
  getCitieByZipCode,
  getAllCitiesFromCommunity,
};
