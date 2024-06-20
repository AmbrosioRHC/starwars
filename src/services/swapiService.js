// swapiService.js

import axios from 'axios';

const baseUrl = 'https://swapi.dev/api';

const fetchEntities = async (entity) => {
  try {
    const response = await axios.get(`${baseUrl}/${entity}/`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export const fetchPeople = () => fetchEntities('people');
export const fetchVehicles = () => fetchEntities('vehicles');
export const fetchPlanets = () => fetchEntities('planets');
