// PeopleList.jsx

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { fetchPeople } from '../services/swapiService';
import CharacterCard from '../components/CharacterCard';

// Función para obtener el ID de la imagen basado en la URL del personaje
const getImageId = (url) => {
  // Lógica para extraer el ID de la imagen
  // Por ejemplo, podrías hacer algo como:
  const id = url.split('/').filter(Boolean).pop();
  return id;
};

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPeople();
      setPeople(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="mt-4">People List</h1>
      <Row className="mt-4">
        {people.map((character) => (
          <Col key={character.url} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${getImageId(character.url)}.jpg`} />
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <strong>Gender:</strong> {character.gender}<br />
                  <strong>Hair color:</strong> {character.hair_color}<br />
                  <strong>Eye color:</strong> {character.eye_color}
                </Card.Text>
                <Button variant="primary">View Details</Button>
                {/* Add favorite button with heart icon */}
                <Button variant="outline-danger" className="ml-2">
                  <i className="fa fa-heart"></i> Save
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PeopleList;
