import React from 'react';

const users = [
  { id: 1, name: 'Alice', color: '#00B8A9' },
  { id: 2, name: 'Bob', color: '#F6416C' },
  { id: 3, name: 'Charlie', color: '#FFDE7C' },
  { id: 4, name: 'David', color: '#43D8C9' }
];

function UserList() {
  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          className="colorful-list-item"
          style={{ color: user.color }}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;