const cities = require("../data/datos_minimized.json");
import { calculateDistance } from "./geolocalitationUtils";
import { City } from "./types";

function getCityByZipCode(zipCode: string): City | undefined {
  return cities.find((city: City) => city.cityCode === zipCode);
}
function getCityByName(name: string): City | undefined {
  const filteredCities = cities.filter((item: City) =>
    item.city.includes(name)
  );
  return filteredCities;
}

function getAllCitiesFromCommunity(community: string): {
  uniqueCities: City[];
  numberCities: number;
} {
  const filteredCities = cities.filter((city: City) =>
    city.community.includes(community)
  );
  const uniqueCityNames = new Set<string>();

  const uniqueCities = filteredCities.filter((item: City) => {
    if (!uniqueCityNames.has(item.city)) {
      uniqueCityNames.add(item.city);
      return true;
    }
    return false;
  });
  const numberCities = uniqueCities.length;

  return { uniqueCities, numberCities };
}
function getAllCities(): {
  uniqueCities: City[];
  numberCities: number;
} {
  const uniqueCityNames = new Set<string>();
  const uniqueCities: City[] = [];

  cities.forEach((item: City) => {
    if (!uniqueCityNames.has(item.city)) {
      uniqueCityNames.add(item.city);
      uniqueCities.push(item);
    }
  });

  const numberCities = uniqueCities.length;
  return { uniqueCities, numberCities };
}

function getCitiesInRange(
  referenceCity: string,
  range: number
  // allCities: City[]
): City[] {
  const cityObjectReference = cities.find(
    (item: City) => item.city === referenceCity
  );
  if (!cityObjectReference) {
    console.error(`La ciudad de referencia ${referenceCity} no se encontró`);
    return [];
  }
  return cities.filter(
    (city: City) => calculateDistance(cityObjectReference, city) <= range
  );
}

export = {
  getCityByName,
  getAllCities,
  getCityByZipCode,
  getAllCitiesFromCommunity,
  getCitiesInRange,
};
