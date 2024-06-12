# Changelog

## [1.0.4] - 2024-06-12
- Cambio de nombre en la funcion `getCityByZipCode` por  `getCityByCityCode`, para guardar coherencia entre los nombres. Devolución en caso de errores en la funcion `getAllCitiesFromCommunity` y `getCitiesInRange`. Dejar disponible la data/cities.json en github. Estaba en el gitignore.

## [1.0.3] - 2024-06-09
- Devolver en `getAllCities` ciudades ordenadas alfabéticamente por ciudad. REVISION de ERROES

## [1.0.2] - 2024-06-09
- Devolver en `getAllCities` ciudades ordenadas alfabéticamente por ciudad.

## [1.0.1] - 2024-06-08
- Cambiar Readme. Añadir mejor descripción y cambiar erratas.

## [1.0.0] - 2024-06-08
- Renombrar paquete de 'locationsInfo' a 'spanish-cities-info' para reflejar mejor el contenido
- Cambios en alguna funcion mal nombrada.

## Changelog anterior para `locationsinfo`

## [1.1.6] - 2024-06-06
- Minimizar tamaño del paquete.

## [1.1.5] - 2024-06-06
- Minimizar tamaño del paquete.

## [1.1.4] - YYYY-MM-DD
- Arreglos en la función `getCitiesInRange`, ya no es necesario pasar a la funcion la lista de Ciudades en la que basarse para el rango de distancia. Ya la incluyo en la función, para que sea más cómodo usarla y sobre todo eficiente.

## [1.1.3] - YYYY-MM-DD
- Arreglos con problemas de data

## [1.1.2] - YYYY-MM-DD
- Arreglos de configuracion

## [1.1.1] - YYYY-MM-DD
- Se ha agregado la función `getCitiesInRange` para encontrar ciudades dentro de un rango.
- Mejora en la función, `getCitiByName`. 
  Ahora devuelve un array de ciudades en lugar de un solo objeto de ciudad. Esto se ha implementado para admitir búsquedas más flexibles que incluyan cualquier parte del nombre de la ciudad. 
    Por ejemplo, si buscas "Ferr", la función devolverá ciudades como "Ferrol", "Ferreries" y "San Fernando de Henares". Esta mejora proporciona una funcionalidad más versátil y útil para los usuarios al realizar búsquedas por nombre de ciudad.
    Cambios en el objeto City:
- Añadido soporte para el campo language. Cataluña (ca), Galicia (ga), País Vasco (eu). Además incluye también (cast) como el resto de ciudades.
- Se han corregido errores menores en otras funciones.
- Se ha actualizado la documentación.

## [1.1.0] - YYYY-MM-DD
- Se han agregado nuevas funciones para manipular los datos de las ciudades.
- Se ha mejorado la eficiencia de algunas funciones.
- Se ha actualizado la documentación.

## [1.0.0] - YYYY-MM-DD
- Versión inicial del paquete.
- Se han incluido funciones básicas para acceder a los datos de las ciudades.
