const {
  getAllCities,
  getCitieByZipCode,
  getAllCitiesFromCommunity,
} = require("./src/index");

// Prueba de getAllCities
// console.log("Probando getAllCities:");
// const todasLasCiudades = getAllCities();
// console.log(todasLasCiudades);

// Prueba de getAllCities ENCONTRAR UNA CIUDAD POR ZIPCODE
// const encontrarUnaCiudad = getCitieByZipCode("15401");
// console.log(encontrarUnaCiudad);

// Prueba de getAllCitiesFromCommunity ENCONTRAR LAS CIUDADES DE UNA COMUNIDAD
const getCitiesComumnity = getAllCitiesFromCommunity("Galicia");
console.log(getCitiesComumnity);
