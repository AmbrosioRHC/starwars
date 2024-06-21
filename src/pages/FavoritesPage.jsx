import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  const getImageId = (url) => {
    const id = url.split('/').filter(Boolean).pop();
    return id;
  };

  const getEntityImageUrl = (url) => {
    const entityType = url.split('/')[4]; // Obtener el tipo de entidad: 'people', 'vehicles', 'planets', etc.
    const id = getImageId(url);
  
    // Construir la URL de la imagen según el tipo de entidad
    let imageUrl = `https://starwars-visualguide.com/assets/img/`;
  
    if (entityType === 'people') {
      imageUrl += `characters/${id}.jpg`;
    } else if (entityType === 'vehicles') {
      imageUrl += `vehicles/${id}.jpg`;
    } else if (entityType === 'planets') {
      imageUrl += `planets/${id}.jpg`;
    }
  
    return imageUrl;
  };

  const renderFavorites = () => {
    if (favorites.length === 0) {
      return (
        <Col>
          <p>No favorites selected.</p>
        </Col>
      );
    }

    return favorites.map((item) => (
      <Col key={item.url} xs={12} sm={6} md={4} lg={3}>
        <Card className="mb-3">
        <Card.Img
  variant="top"
  src={getEntityImageUrl(item.url)}
  alt={item.name}
/>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Button variant="danger" onClick={() => removeFromFavorites(item)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      <h1 className="mt-4">Favorites</h1>
      <Row className="mt-4">
        {renderFavorites()}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
