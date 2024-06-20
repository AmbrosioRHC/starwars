// Navbar.jsx

import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FavoritesContext } from '../context/FavoritesContext';

const NavBar = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Star Wars Logo"
            src="https://w7.pngwing.com/pngs/723/1016/png-transparent-star-wars-logo-star-wars-text-logo-silhouette.png"  // Añade tu imagen de logo de Star Wars
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Star Wars App
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#favorites">
            Favorites <span className="badge bg-primary">{favorites.length}</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
