# spanish-cities-info

Esta librería proporciona una lista de ciudades de España, con varias funciones. 

## Type city
```javascript	
{
   city: 'Almería',
   cityCode: '04013',
   province: 'Almería',
   community: 'Andalucia',
   latitude: '36.8381',
   longitude: '-2.4597',
   language: [ 'cast' ]
 },
```
## Funcionalidades

- **Obtener todas las ciudades de España:** Puedes obtener una lista completa de todas las ciudades disponibles en España.
- **Obtener una ciudad por zipCode:** Proporciona la capacidad de buscar una ciudad por su código postal.
- **Obtener una ciudad por nombre:** Permite buscar una ciudad por su nombre.
- **Obtener ciudades dentro de un rango:** Te permite encontrar todas las ciudades dentro de un rango específico de una ciudad determinada.

## Instalación

Puedes instalar esta librearía utilizando npm:

**npm install locationsInfo**


## Uso

```javascript
// Importar el módulo
import { getAllCities, getCitiesInRange } from 'spanish-cities-info';

// Ejemplo de uso para obtener todas las ciudades
const allcities = getAllCities();

// Ejemplo de uso para obtener una ciudad por nombre
  const citiesInRange = getCitiesInRange('Ferrol', 10);
 [
  {
      city: 'Ferrol',
      cityCode: '15036',
      province: 'A Coruña',
      community: 'Galicia',
      latitude: '43.4832',
      longitude: '-8.2369',
      language: [ 'cast', 'ga' ]
    },
    {
      city: 'Fene',
      cityCode: '15035',
      province: 'A Coruña',
      community: 'Galicia',
      latitude: '43.45',
      longitude: '-8.15',
      language: [ 'cast', 'ga' ]
    },
    {
      city: 'Neda',
      cityCode: '15055',
      province: 'A Coruña',
      community: 'Galicia',
      latitude: '43.4996',
      longitude: '-8.1594',
      language: [ 'cast', 'ga' ]
    },
    {
      city: 'Narón',
      cityCode: '15054',
      province: 'A Coruña',
      community: 'Galicia',
      latitude: '43.5333',
      longitude: '-8.2167',
      language: [ 'cast', 'ga' ]
    },
    {
      city: 'Pontedeume',
      cityCode: '15069',
      province: 'A Coruña',
      community: 'Galicia',
      latitude: '43.4078',
      longitude: '-8.1721',
      language: [ 'cast', 'ga' ]
    },
    {
      city: 'Mugardos',
      cityCode: '15051',
      province: 'A Coruña',
      community: 'Galicia',
      latitude: '43.4604',
      longitude: '-8.2551',
      language: [ 'cast', 'ga' ]
    },
    {
      city: 'Ares',
      cityCode: '15004',
      province: 'A Coruña',
      community: 'Galicia',
      latitude: '43.4244',
      longitude: '-8.2043',
      language: [ 'cast', 'ga' ]
    }
  ]

## Contribución

Si encuentras algún error, tienes alguna sugerencia de mejora, 
o si falta tu ciudad en la lista, 
¡me encantaría recibir tu contribución! 
Puedes [crear un issue](https://github.com/ManuelCebreiro/locationsInfo/issues)
para reportar el problema o 
[enviar un pull request](https://github.com/ManuelCebreiro/locationsInfo/pulls) 
con tus cambios.

Para añadir una nueva ciudad:
1. Asegúrate de tener el código postal, nombre de la ciudad, provincia,
   comunidad autónoma y sus códigos correspondientes.
2. Edita el archivo JSON de ciudades y agrega la información de la nueva ciudad.
3. Envia tu pull request con la nueva información y me encargaré de revisarlo.

¡Esperamos tu contribución!
