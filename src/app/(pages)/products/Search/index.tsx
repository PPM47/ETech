'use client';
import React, { useState } from 'react';
import axios from 'axios';
import classes from './index.module.scss';

const ProductSearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (query.trim() === '') return;

    setLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await axios.get(`/api/search`, {
        params: { q: query },
      });
      setResults(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError('Failed to fetch search results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.searchBarContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className={classes.searchInput}
      />
      <button onClick={handleSearch} className={classes.searchButton} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>

      {error && <div className={classes.errorMessage}>{error}</div>}

      {results.length > 0 ? (
        <ul className={classes.resultsList}>
          {results.map((product) => (
            <li key={product.id} className={classes.resultItem}>
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        !loading && query && <div className={classes.noResults}>No results found</div>
      )}
    </div>
  );
};

export default ProductSearchBar;
