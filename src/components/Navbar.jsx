import React, { useState } from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap'; // Importa Badge para mostrar el contador
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const [favoriteCount, setFavoriteCount] = useState(0); // Estado para contar favoritos

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/" exact>
        <img
          alt="Star Wars Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8UEvq-8gIY_w1LvSUysHTGt-J_gAki08vg&s"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Star Wars App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/characters" exact>
            People
          </Nav.Link>
          <Nav.Link as={NavLink} to="/vehicles" exact>
            Vehicles
          </Nav.Link>
          <Nav.Link as={NavLink} to="/planets" exact>
            Planets
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/favorites">
            <i className="fa fa-heart"></i> Favorites{' '}
            {favoriteCount > 0 && <Badge pill variant="danger">{favoriteCount}</Badge>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
