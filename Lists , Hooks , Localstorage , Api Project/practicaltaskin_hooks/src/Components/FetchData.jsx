import React, { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData.slice(0, 5)); // Show only first 5 posts
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs only once when component mounts

  if (loading) {
    return (
      <div style={{ 
        padding: '20px', 
        border: '2px solid #ffc107', 
        borderRadius: '8px', 
        margin: '20px',
        textAlign: 'center'
      }}>
        <h2>Task 2: Fetch Data with useEffect Hook</h2>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '20px', 
        border: '2px solid #dc3545', 
        borderRadius: '8px', 
        margin: '20px',
        textAlign: 'center'
      }}>
        <h2>Task 2: Fetch Data with useEffect Hook</h2>
        <p style={{ color: 'red' }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #28a745', 
      borderRadius: '8px', 
      margin: '20px'
    }}>
      <h2>Task 2: Fetch Data with useEffect Hook</h2>
      <h3>Posts from API:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.map(post => (
          <li 
            key={post.id} 
            style={{
              padding: '10px',
              margin: '10px 0',
              backgroundColor: '#f8f9fa',
              borderRadius: '5px',
              borderLeft: '4px solid #007bff'
            }}
          >
            <strong>Post {post.id}:</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData; 