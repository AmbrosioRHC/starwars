// CharacterCard.jsx

import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FavoritesContext } from '../context/FavoritesContext';

const CharacterCard = ({ character }) => {
  const { addFavorite, isFavorite } = useContext(FavoritesContext);

  const handleAddFavorite = () => {
    addFavorite(character);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${getImageId(character.url)}.jpg`} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
          <strong>Gender:</strong> {character.gender}<br />
          <strong>Hair Color:</strong> {character.hair_color}<br />
          <strong>Eye Color:</strong> {character.eye_color}
        </Card.Text>
        <Button variant="primary">View More</Button>{' '}
        <Button variant="danger" onClick={handleAddFavorite}>
          {isFavorite(character) ? 'Remove from Favorites' : 'Add to Favorites'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;

function getImageId(url) {
  return url.match(/\/(\d+)\/$/)[1];
}
