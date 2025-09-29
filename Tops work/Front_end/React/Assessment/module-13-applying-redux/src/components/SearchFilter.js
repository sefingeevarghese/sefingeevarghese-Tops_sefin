import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productSlice';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { searchTerm, filteredItems, items } = useSelector(state => state.products);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const clearSearch = () => {
    dispatch(setSearchTerm(''));
  };

  return (
    <div className="search-filter">
      <div className="search-container">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search products by name or description..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search-btn"
              onClick={clearSearch}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>
        
        <div className="search-results-info">
          {searchTerm ? (
            <span className="results-count">
              Showing {filteredItems.length} of {items.length} products
              {filteredItems.length === 0 && <span className="no-results"> - No products found</span>}
            </span>
          ) : (
            <span className="total-count">
              Total products: {items.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;