# locationsInfo

Este módulo proporciona una lista de ciudades de España y permite varias operaciones.

## Funcionalidades

- **Obtener todas las ciudades de España:** Puedes obtener una lista completa de todas las ciudades disponibles en España.
- **Obtener una ciudad por zipCode:** Proporciona la capacidad de buscar una ciudad por su código postal.
- **Obtener una ciudad por nombre:** Permite buscar una ciudad por su nombre.
- **Obtener ciudades dentro de un rango:** Te permite encontrar todas las ciudades dentro de un rango específico de una ciudad determinada.

## Instalación

Puedes instalar este módulo utilizando npm:

**npm install locationsInfo**


## Uso

```javascript
// Importar el módulo
import { getAllCities, getCitiesInRange } from 'locationsinfo';

// Ejemplo de uso para obtener todas las ciudades
const allcities = getAllCities();

// Ejemplo de uso para obtener una ciudad por nombre
  const citiesInRange = getCitiesInRange('Ferrol', 10);



Este README.md proporciona una descripción básica del módulo, cómo instalarlo y cómo usarlo. Puedes personalizarlo según tus necesidades específicas y los detalles de tu módulo.

Espero que esto te ayude a empezar. Si necesitas más ayuda, ¡no dudes en preguntar!

## Contribución

Si encuentras algún error, tienes alguna sugerencia de mejora, o si falta tu ciudad en la lista, ¡me encantaría recibir tu contribución! Puedes [crear un issue](https://github.com/ManuelCebreiro/locationsInfo/issues) para reportar el problema o [enviar un pull request](https://github.com/ManuelCebreiro/locationsInfo/pulls) con tus cambios.

Para añadir una nueva ciudad:
1. Asegúrate de tener el código postal, nombre de la ciudad, provincia, comunidad autónoma y sus códigos correspondientes.
2. Edita el archivo JSON de ciudades y agrega la información de la nueva ciudad.
3. Envia tu pull request con la nueva información y me encargaré de revisarlo.

¡Esperamos tu contribución!
