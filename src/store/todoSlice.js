import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");

  if (localTodoList) {
    return JSON.parse(localTodoList);
  }

  // if no todo items in local storage, create empty todo list in local storage, and return it
  window.localStorage.setItem("todoList", []);
  return [];
};

const initialValue = {
  filterStatus: "all",
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      // update list in the state
      state.todoList.push(action.payload);
      // read local stoage
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        // conver to json
        const todoListArr = JSON.parse(todoList);
        // update json
        todoListArr.push({ ...action.payload });
        // update local storage
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
      } else {
        // if no todo list in local storage, set new item to local storage from modal form
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    updateTodo: (state, action) => {
      // read local storage
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        // find selected todo and update
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        // updating local storage with updated todo list
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        // update state with updated todo list
        state.todoList = todoListArr;
      }
    },
    deleteTodo: (state, action) => {
      // read local storage
      const todoList = window.localStorage.getItem("todoList");

      if (todoList) {
        // parse into json
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            // taking out one todo according to matched index
            todoListArr.splice(index, 1);
          }
        });
        // updating local storage with updated doto list
        window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
        // updating state with updated doto list
        state.todoList = todoListArr;
      }
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
