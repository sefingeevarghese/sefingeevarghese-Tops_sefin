import React from 'react';

function ShowDate() {
  const showDate = () => {
    document.getElementById('demo').innerHTML = new Date().toString();
  };

  return (
    <div>
      <h2>My First JavaScript in React</h2>
      <button onClick={showDate}>
        Click me to display Date and Time.
      </button>
      <p id="demo"></p>
    </div>
  );
}

export default ShowDate;
