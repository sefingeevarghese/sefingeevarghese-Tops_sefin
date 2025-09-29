import { atom, selector } from 'recoil';

// Atom to store the list of todos
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

// Atom to store the current filter (all, completed, uncompleted)
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'all',
});

// Selector to get filtered todo list
export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'completed':
        return list.filter((item) => item.isComplete);
      case 'uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

// Selector to get todo statistics
export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});