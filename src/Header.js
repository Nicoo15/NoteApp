// src/Header.js
import React, { useState } from 'react';

const Header = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <header>
      <h1>Note App</h1>
      <div>
        <input
          type="text"
          placeholder="Buscar notas..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </header>
  );
};

export default Header;
