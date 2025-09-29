# React Lists and Keys Practice

This project demonstrates two fundamental React concepts: rendering lists using the `map()` function and using unique keys for list items.

## Tasks Implemented

### Task 1: Fruit List using map()
- Created a `FruitList` component with an array of fruit names
- Used the `map()` function to render each fruit as a list item
- Applied basic styling with CSS Grid for responsive layout

### Task 2: User List with Unique Keys
- Created a `UserList` component with an array of user objects, each with a unique `id`
- Rendered user names using `map()` function
- Assigned unique `key={user.id}` to each user list item for optimal React performance

## Key Concepts Demonstrated

1. **Component Separation**: Each task is implemented as a separate React component
2. **map() Function**: Used to transform arrays into React elements
3. **Keys**: Assigned unique keys to help React efficiently update the DOM
4. **Component Structure**: Clean separation of concerns with modular components
5. **Responsive Design**: CSS Grid for adaptive layouts

## Project Structure

```
src/
├── components/
│   ├── FruitList.js    # Task 1: Fruit list component
│   └── UserList.js     # Task 2: User list component
├── App.js              # Main app component
├── App.css             # Styling
└── index.js            # Entry point
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application

## Code Highlights

### Task 1 - FruitList Component
```jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry", "Mango"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li> // using index as key (okay for static list)
        ))}
      </ul>
    </div>
  );
}
```

### Task 2 - UserList Component
```jsx
function UserList() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Mark" },
    { id: 4, name: "Sara" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // unique key = user.id
        ))}
      </ul>
    </div>
  );
}
```

## Features

- ✅ Component-based architecture
- ✅ Responsive design
- ✅ Hover effects
- ✅ Clean, modern UI
- ✅ Proper React key usage
- ✅ CSS Grid layout
- ✅ Mobile-friendly
- ✅ Modular code structure
