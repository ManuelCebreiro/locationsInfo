const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "../ES/zipcodes.es.json");
const outputFilePath = path.join(__dirname, "../data/cities.json");

// Leer el archivo zipcodes.es.json
fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error leyendo el archivo:", err);
    return;
  }

  try {
    const zipcodes = JSON.parse(data);
    const transformedData = zipcodes.map((item) => ({
      countryCode: item.country_code,
      zipCode: item.zipcode,
      place: item.place,
      city: item.community, // Cambiado a "community" según tu especificación
      cityCode: item.community_code, // Cambiado a "community_code" según tu especificación
      province: item.province,
      provinceCode: item.province_code,
      community: item.state, // Cambiado a "state" según tu especificación
      communityCode: item.state_code, // Cambiado a "state_code" según tu especificación
      latitude: item.latitude,
      longitude: item.longitude,
    }));

    // Escribir el archivo transformado
    fs.writeFile(
      outputFilePath,
      JSON.stringify(transformedData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error escribiendo el archivo:", err);
          return;
        }
        console.log("Datos transformados y guardados en", outputFilePath);
      }
    );
  } catch (parseError) {
    console.error("Error parseando el archivo JSON:", parseError);
  }
});
