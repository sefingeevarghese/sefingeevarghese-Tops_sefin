import React, { useState, useEffect } from 'react';
import { postAPI } from '../services/api';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'newest',
    dateRange: 'all'
  });

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    filterAndSearchPosts();
  }, [searchTerm, filters, posts]);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const allPosts = await postAPI.getAll();
      setPosts(allPosts);
    } catch (error) {
      console.error('Failed to load posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterAndSearchPosts = () => {
    let filtered = [...posts];

    // Search by title and content
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term)
      );
    }

    // Apply filters
    if (filters.category !== 'all') {
      filtered = filtered.filter(post => post.category === filters.category);
    }

    // Apply date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date();
      const daysAgo = filters.dateRange === 'today' ? 1 : 
                     filters.dateRange === 'week' ? 7 : 
                     filters.dateRange === 'month' ? 30 : 365;
      
      filtered = filtered.filter(post => {
        const postDate = new Date(post.createdAt);
        const diffTime = Math.abs(now - postDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= daysAgo;
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'popular':
          return (b.likes || 0) - (a.likes || 0);
        default:
          return 0;
      }
    });

    setFilteredPosts(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilters({
      category: 'all',
      sortBy: 'newest',
      dateRange: 'all'
    });
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <h2>Search Posts</h2>
        <p>Find posts by title, content, or apply filters</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <div className="search-input-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="filters-header">
          <h3>Filters</h3>
          <button onClick={clearFilters} className="clear-filters-btn">
            Clear All
          </button>
        </div>
        
        <div className="filters-grid">
          <div className="filter-group">
            <label>Category</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="filter-select"
            >
              <option value="all">All Categories</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="filter-select"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title A-Z</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Date Range</label>
            <select
              value={filters.dateRange}
              onChange={(e) => handleFilterChange('dateRange', e.target.value)}
              className="filter-select"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="search-results">
        <div className="results-header">
          <h3>Search Results</h3>
          <span className="results-count">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </span>
        </div>

        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="no-results">
            <p>No posts found matching your search criteria.</p>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="search-post-card">
                <div className="post-header">
                  <h4>{post.title}</h4>
                  <span className="post-category">{post.category || 'General'}</span>
                </div>
                <p className="post-excerpt">
                  {post.content.length > 150 
                    ? `${post.content.substring(0, 150)}...` 
                    : post.content
                  }
                </p>
                <div className="post-meta">
                  <span>📅 {new Date(post.createdAt).toLocaleDateString()}</span>
                  <span>👤 {post.userName || 'Anonymous'}</span>
                  {post.likes && <span>❤️ {post.likes} likes</span>}
                  {post.views && <span>👁️ {post.views} views</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search; 