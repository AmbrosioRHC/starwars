import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlanetCard from "../components/PlanetCard";  // Ruta relativa al directorio components

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((data) => setPlanets(data.results))
      .catch((error) => console.error('Error fetching planets:', error));
  }, []);

  return (
    <Container>
      <h2 className="my-4">Planets List</h2>
      <Row>
        {planets.map((planet, index) => (
          <Col key={index}>
            <PlanetCard planet={planet} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlanetsList;
