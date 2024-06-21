import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { fetchCharacterDetail } from '../services/swapiService';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacterDetail(id);
      setCharacter(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                <strong>Gender:</strong> {character.gender}<br />
                <strong>Height:</strong> {character.height} cm<br />
                <strong>Mass:</strong> {character.mass} kg<br />
                <strong>Hair Color:</strong> {character.hair_color}<br />
                <strong>Skin Color:</strong> {character.skin_color}<br />
                <strong>Eye Color:</strong> {character.eye_color}<br />
                <strong>Birth Year:</strong> {character.birth_year}<br />
                <strong>Homeworld:</strong> <a href={character.homeworld}>{character.homeworld}</a><br />
                <strong>Films:</strong>
                <ul>
                  {character.films.map(film => (
                    <li key={film}><a href={film}>{film}</a></li>
                  ))}
                </ul>
                <strong>Vehicles:</strong>
                <ul>
                  {character.vehicles.map(vehicle => (
                    <li key={vehicle}><a href={vehicle}>{vehicle}</a></li>
                  ))}
                </ul>
                <strong>Starships:</strong>
                <ul>
                  {character.starships.map(starship => (
                    <li key={starship}><a href={starship}>{starship}</a></li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterDetail;
