// swapiService.js

export const fetchPlanets = async () => {
    // Lógica para obtener la lista de planetas
    const response = await fetch('https://swapi.dev/api/planets/');
    const data = await response.json();
    return data.results;
  };
  
  export const fetchCharacter = async () => {
    // Lógica para obtener la lista de personajes
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    return data.results;
  };
  
  export const fetchVehicles = async () => {
    // Lógica para obtener la lista de vehículos
    const response = await fetch('https://swapi.dev/api/vehicles/');
    const data = await response.json();
    return data.results;
  };
  
  // Si necesitas una función específica para obtener un solo planeta
  export const fetchPlanet = async (id) => {
    const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
    const data = await response.json();
    return data;
  };
  
  export const fetchCharacterDetail = async (id) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await response.json();
    return data;
  };

  // Función para obtener un solo vehículo
export const fetchVehicle = async (id) => {
    const response = await fetch(`https://swapi.dev/api/vehicles/${id}/`);
    const data = await response.json();
    return data;
  };