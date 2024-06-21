import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VehicleCard = ({ vehicle }) => {
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
          <strong>Class:</strong> {vehicle.vehicle_class}
        </Card.Text>
        <Link to={`/vehicles/${getImageId(vehicle.url)}`} className="btn btn-primary">View Details</Link>
        <Button variant="outline-danger" className="ml-2">
          <i className="fa fa-heart"></i> Save
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VehicleCard;
