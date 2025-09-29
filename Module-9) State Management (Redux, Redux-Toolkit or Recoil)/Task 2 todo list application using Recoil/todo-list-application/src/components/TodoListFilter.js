import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoil/atoms';

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div style={{ 
      marginBottom: '20px', 
      padding: '10px', 
      backgroundColor: '#e9ecef', 
      borderRadius: '5px' 
    }}>
      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
        Filter:
      </label>
      <select 
        value={filter} 
        onChange={updateFilter}
        style={{
          padding: '5px 10px',
          fontSize: '14px',
          border: '1px solid #ccc',
          borderRadius: '3px'
        }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoListFilter;