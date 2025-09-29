import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/actions';

const Counter = () => {
  // Get the current count from Redux store
  const count = useSelector(state => state.count);
  
  // Get dispatch function to send actions
  const dispatch = useDispatch();

  // Handler functions
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Redux Counter Application</h1>
      
      <div style={styles.counterDisplay}>
        <h2 style={styles.countText}>Count: {count}</h2>
      </div>
      
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button}
          onClick={handleIncrement}
        >
          Increment (+)
        </button>
        
        <button 
          style={styles.button}
          onClick={handleDecrement}
        >
          Decrement (-)
        </button>
        
        <button 
          style={{...styles.button, ...styles.resetButton}}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f0f2f5',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  title: {
    color: '#333',
    marginBottom: '30px',
    fontSize: '24px'
  },
  counterDisplay: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  countText: {
    fontSize: '36px',
    color: '#2c3e50',
    margin: 0,
    fontWeight: 'bold'
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    minWidth: '120px'
  },
  resetButton: {
    backgroundColor: '#e74c3c'
  }
};

export default Counter;