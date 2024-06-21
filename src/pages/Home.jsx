// src/pages/Home.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <h1 className="mt-4">Welcome to the Star Wars Universe</h1>
      <Row className="mt-4">
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Characters</Card.Title>
              <Card.Text>Explore the various characters in the Star Wars universe.</Card.Text>
              <Link to="/characters" className="btn btn-primary">View Characters</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Planets</Card.Title>
              <Card.Text>Discover the different planets in the Star Wars galaxy.</Card.Text>
              <Link to="/planets" className="btn btn-primary">View Planets</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Vehicles</Card.Title>
              <Card.Text>Learn about the various vehicles used in the Star Wars saga.</Card.Text>
              <Link to="/vehicles" className="btn btn-primary">View Vehicles</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
