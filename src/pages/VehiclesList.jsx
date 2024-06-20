import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VehicleCard from "../components/VehicleCard";  // Ruta relativa al directorio components

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/vehicles/')
      .then((response) => response.json())
      .then((data) => setVehicles(data.results))
      .catch((error) => console.error('Error fetching vehicles:', error));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Vehicles List</h2>
      <Row>
        {vehicles.map((vehicle, index) => (
          <Col key={index}>
            <VehicleCard vehicle={vehicle} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VehiclesList;
