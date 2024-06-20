// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import NavBar from './components/Navbar';
import PeopleList from './pages/PeopleList';
import VehiclesList from './pages/VehiclesList';
import PlanetsList from './pages/PlanetsList';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<PeopleList />} />
            <Route path="/vehicles" element={<VehiclesList />} />
            <Route path="/planets" element={<PlanetsList />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
