import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchVehicles } from '../services/swapiService';  // Asegúrate de tener la función fetchVehicles implementada
import VehicleCard from '../components/VehicleCard';  // Asegúrate de tener el componente VehicleCard correctamente implementado

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVehicles();
      setVehicles(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Vehicles List</h1>
      <Row className="mt-4">
        {vehicles.map((vehicle) => (
          <Col key={vehicle.url} xs={12} sm={6} md={4} lg={3}>
            <VehicleCard vehicle={vehicle} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VehiclesList;
