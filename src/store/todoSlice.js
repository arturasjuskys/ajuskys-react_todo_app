import { createSlice } from "@reduxjs/toolkit";

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");

  if (localTodoList) {
    return JSON.parse(localTodoList);
  }

  // if no todo items in local storage, create empty todo list in local storage, and return it
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};

const initialValue = {
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
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
