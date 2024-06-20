import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PlanetCard = ({ planet }) => {
  // Función para obtener el ID de la imagen basado en la URL del planeta
  const getImageId = (url) => {
    const id = url.split('/').filter(Boolean).pop();
    return id;
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${getImageId(planet.url)}.jpg`} />
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>
          <strong>Climate:</strong> {planet.climate}<br />
          <strong>Terrain:</strong> {planet.terrain}<br />
          <strong>Population:</strong> {planet.population}<br />
          {/* Agregar más detalles según los datos de SWAPI */}
        </Card.Text>
        <Button variant="primary">View Details</Button>
        {/* Add favorite button with heart icon */}
        <Button variant="outline-danger" className="ml-2">
          <i className="fa fa-heart"></i> Save
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PlanetCard;
