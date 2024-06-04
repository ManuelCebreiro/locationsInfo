const cities = require("../data/cities.json");
import { calculateDistance } from "./geolocalitationUtils";
import { City } from "./types";

function getCitieByZipCode(zipCode: string): City | undefined {
  return cities.find((city: City) => city.cityCode === zipCode);
}
function getCitiByName(name: string): City | undefined {
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
  range: number,
  allCities: City[]
): City[] {
  const cityObjectReference = allCities.find(
    (item) => item.city === referenceCity
  );
  if (!cityObjectReference) {
    console.error(`La ciudad de referencia ${referenceCity} no se encontró`);
    return [];
  }
  return allCities.filter(
    (city) => calculateDistance(cityObjectReference, city) <= range
  );
}

export = {
  getCitiByName,
  getAllCities,
  getCitieByZipCode,
  getAllCitiesFromCommunity,
  getCitiesInRange,
};
