import React from 'react';
import { Card, Button } from 'react-bootstrap';

const VehicleCard = ({ vehicle }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={vehicle.image} alt={vehicle.name} />
      <Card.Body>
        <Card.Title>{vehicle.name}</Card.Title>
        <Card.Text>
          <strong>Modelo:</strong> {vehicle.model}
        </Card.Text>
        <Card.Text>
          <strong>Fabricante:</strong> {vehicle.manufacturer}
        </Card.Text>
        <Card.Text>
          <strong>Costo en créditos:</strong> {vehicle.cost_in_credits}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
        {/* Implementa la funcionalidad para guardar como favorito */}
        <Button variant="danger" className="ml-2">
          <i className="bi bi-heart"></i> Guardar como favorito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
