import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: any;
  title: string;
  status: string;
  time: string;
}

const getInitialValues = (): Todo[] => {
  const localTodoList = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }

  window.localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};

interface TodoState {
  filterStatus: string;
  todoList: Todo[];
  showModalAdd: boolean;
  showModalUpdate: boolean;
  taskToUpdate: string | null;
}

const initialValue: TodoState = {
  filterStatus: 'all',
  todoList: getInitialValues(),
  showModalAdd: false,
  showModalUpdate: false,
  taskToUpdate: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr: Todo[] = JSON.parse(todoList);
        todoListArr.push({ ...action.payload });

        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem('todoList', JSON.stringify([{ ...action.payload }]));
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr: Todo[] = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },

    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr: Todo[] = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.title = action.payload.title;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
    filterItems: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
    setShowModalAdd: (state, action: PayloadAction<boolean>) => {
      state.showModalAdd = action.payload;
    },

    setShowModalUpdate: (state, action: PayloadAction<boolean>) => {
      state.showModalUpdate = action.payload;
    },

    setTaskToUpdate: (state, action: PayloadAction<string | null>) => {
      state.taskToUpdate = action.payload;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
  filterItems,
  setShowModalAdd,
  setShowModalUpdate,
  setTaskToUpdate,
} = todoSlice.actions;
export default todoSlice.reducer;
