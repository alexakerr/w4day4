import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Home from './components/Home';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-characters" element={<BrowseCharacters />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;