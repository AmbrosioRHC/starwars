import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PlanetCard = ({ planet }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{planet.name}</Card.Title>
        <Card.Text>
          <strong>Diámetro:</strong> {planet.diameter}
        </Card.Text>
        <Card.Text>
          <strong>Periodo orbital:</strong> {planet.orbital_period}
        </Card.Text>
        <Card.Text>
          <strong>Periodo de rotación:</strong> {planet.rotation_period}
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

export default PlanetCard;
