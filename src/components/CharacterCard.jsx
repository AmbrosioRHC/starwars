import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  const getImageId = (url) => {
    const id = url.split('/').filter(Boolean).pop();
    return id;
  };

  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${getImageId(character.url)}.jpg`} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <strong>Birth Year:</strong> {character.birth_year}<br />
          <strong>Gender:</strong> {character.gender}<br />
          <strong>Height:</strong> {character.height} cm
        </Card.Text>
        <Link to={`/characters/${getImageId(character.url)}`} className="btn btn-primary">View Details</Link>
        <Button variant="outline-danger" className="ml-2">
          <i className="fa fa-heart"></i> Save
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
