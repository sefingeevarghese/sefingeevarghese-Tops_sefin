import React, { useRef, useState } from 'react';

function UseRefDemo() {
  const renderCount = useRef(0);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [showRenderCount, setShowRenderCount] = useState(false);

  // This will increment on every render but won't cause re-renders
  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current.focus();
  };

  const getInputValue = () => {
    alert(`Current input value: ${inputRef.current.value}`);
  };

  const toggleRenderCount = () => {
    setShowRenderCount(!showRenderCount);
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #fd7e14', 
      borderRadius: '8px', 
      margin: '20px'
    }}>
      <h2>Task 4: useRef Demo - Avoiding Re-renders</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Input Field with useRef:</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #007bff',
            borderRadius: '5px',
            marginRight: '10px',
            width: '250px'
          }}
        />
        <button 
          onClick={focusInput}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Focus Input
        </button>
        <button 
          onClick={getInputValue}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Get Value
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Render Counter (useRef):</h3>
        <p>This component has rendered <strong>{renderCount.current}</strong> times</p>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Note: The render count updates without causing re-renders because useRef doesn't trigger component updates
        </p>
        <button 
          onClick={toggleRenderCount}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {showRenderCount ? 'Hide' : 'Show'} Render Count
        </button>
        {showRenderCount && (
          <p style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
            <strong>Current render count:</strong> {renderCount.current}
          </p>
        )}
      </div>

      <div style={{ 
        padding: '15px', 
        backgroundColor: '#e9ecef', 
        borderRadius: '5px',
        fontSize: '14px'
      }}>
        <h4>Key Points about useRef:</h4>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>useRef values persist between renders without causing re-renders</li>
          <li>Perfect for storing values that don't need to trigger UI updates</li>
          <li>Can be used to directly access DOM elements</li>
          <li>Changes to useRef.current don't cause component to re-render</li>
        </ul>
      </div>
    </div>
  );
}

export default UseRefDemo; 