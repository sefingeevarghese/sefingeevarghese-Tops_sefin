import React from 'react';

const fruits = [
  { name: 'Apple', color: '#FF4F4F' },
  { name: 'Banana', color: '#FFE156' },
  { name: 'Orange', color: '#FF9F1C' },
  { name: 'Mango', color: '#FFB347' },
  { name: 'Grapes', color: '#6A0572' }
];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li
          key={index}
          className="colorful-list-item"
          style={{ color: fruit.color }}
        >
          {fruit.name}
        </li>
      ))}
    </ul>
  );
}

export default FruitList;