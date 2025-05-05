import React from 'react'

function UseCard(props) {
  return (
    <div style={{ border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '8px',
        width: '200px',
        margin: '10px',}}>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  )
}

export default UseCard
