const cities = require("../data/datos_minimized.json");
import { calculateDistance } from "./geolocalitationUtils";
import { City } from "./types";

function getCityByCityCode(cityCode: string): City | undefined {
  return cities.find((city: City) => city.cityCode === cityCode);
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
} | null {
  const filteredCities = cities.filter((city: City) =>
    city.community.includes(community)
  );

  if (filteredCities.length === 0) {
    console.warn(`No se encontraron ciudades para la comunidad ${community}`);
    return null;
  }

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
} {
  const uniqueCityNames = new Set<string>();
  const uniqueCities: City[] = [];

  cities.forEach((item: City) => {
    if (!uniqueCityNames.has(item.city)) {
      uniqueCityNames.add(item.city);
      uniqueCities.push(item);
    }
  });
  uniqueCities.sort((a: City, b: City) => a.city.localeCompare(b.city));
  return { uniqueCities };
}

function getCitiesInRange(referenceCity: string, range: number): City[] | null {
  const cityObjectReference = cities.find(
    (item: City) => item.city === referenceCity
  );
  if (!cityObjectReference) {
    console.error(
      `La ciudad de referencia ${referenceCity}, no se encontró. Asegurate de que el nombre esté bien escrito.`
    );
    return null;
  }

  const citiesInRange = cities.filter(
    (city: City) => calculateDistance(cityObjectReference, city) <= range
  );

  if (citiesInRange.length === 0)
    console.warn(
      `No se encuentran ciudades en el rango ${range} km, de ${referenceCity}`
    );

  return citiesInRange;
}

export = {
  getCityByName,
  getAllCities,
  getCityByCityCode,
  getAllCitiesFromCommunity,
  getCitiesInRange,
};
