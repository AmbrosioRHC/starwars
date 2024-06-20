import React from 'react';
import { Card, Button } from 'react-bootstrap';

const VehicleCard = ({ vehicle }) => {
  // Función para obtener el ID de la imagen basado en la URL del vehículo
  const getImageId = (url) => {
    const id = url.split('/').filter(Boolean).pop();
    return id;
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${getImageId(vehicle.url)}.jpg`} />
      <Card.Body>
        <Card.Title>{vehicle.name}</Card.Title>
        <Card.Text>
          <strong>Model:</strong> {vehicle.model}<br />
          <strong>Manufacturer:</strong> {vehicle.manufacturer}<br />
          <strong>Cost in Credits:</strong> {vehicle.cost_in_credits}<br />
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

export default VehicleCard;
