import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchPlanets } from '../services/swapiService';  // Asegúrate de tener la función fetchPlanets implementada
import PlanetCard from '../components/PlanetCard';  // Asegúrate de tener el componente PlanetCard correctamente implementado

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlanets();
      setPlanets(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Planets List</h1>
      <Row className="mt-4">
        {planets.map((planet) => (
          <Col key={planet.url} xs={12} sm={6} md={4} lg={3}>
            <PlanetCard planet={planet} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlanetsList;
