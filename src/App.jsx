import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanetsList from './pages/PlanetsList';
import PlanetDetails from './pages/PlanetDetails';
import CharactersList from './pages/CharactersList';
import CharacterDetails from './pages/CharacterDetails';
import VehiclesList from './pages/VehiclesList';
import VehicleDetails from './pages/VehicleDetails';
import FavoritesPage from './pages/FavoritesPage'; // Página de favoritos

import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/vehicles" element={<VehiclesList />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />
          <Route path="/planets" element={<PlanetsList />} />
          <Route path="/planets/:id" element={<PlanetDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} /> {/* Ruta para la página de favoritos */}
        </Routes>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
