'use client';
import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query) return;

    try {
      const res = await fetch(`http://localhost:3000/api/searchProducts?keyword=${encodeURIComponent(query)}`);

      if (res.ok) {
        const data = await res.json();
        setResults(data);
      } else {
        console.error('Search request failed');
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {results.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.priceJSON}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
