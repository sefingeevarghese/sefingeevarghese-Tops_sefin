import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../recoil/atoms';

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(todoListStatsState);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '5px',
      marginBottom: '20px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
          {totalNum}
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>Total</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
          {totalCompletedNum}
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>Completed</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#dc3545' }}>
          {totalUncompletedNum}
        </div>
        <div style={{ fontSize: '14px', color: '#666' }}>Remaining</div>
      </div>
    </div>
  );
};

export default TodoListStats;