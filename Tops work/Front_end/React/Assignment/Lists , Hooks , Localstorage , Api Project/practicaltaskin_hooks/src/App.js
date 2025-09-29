import React from 'react';
import Counter from './Components/Counter';
import FetchData from './Components/FetchData';
import CounterRedux from './Components/CounterRedux';
import UseRefDemo from './Components/UseRefDemo';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <header style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '30px',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '2.5rem' }}>React Hooks & Redux Tasks</h1>
          <p style={{ margin: '10px 0 0 0', fontSize: '1.1rem', opacity: 0.9 }}>
            Practical examples of useState, useEffect, Redux, and useRef hooks
          </p>
        </header>
        
        <main style={{ padding: '20px' }}>
          <Counter />
          <FetchData />
          <CounterRedux />
          <UseRefDemo />
        </main>
        
        <footer style={{
          backgroundColor: '#343a40',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
          fontSize: '14px'
        }}>
          <p>React Hooks & Redux Practice Project</p>
        </footer>
      </div>
    </div>
  );
}

export default App;