// HERE WE ARE CREATING CREATESLICE().
// NANOID IS FOR CREATING UNIQUE ID'S.
import { createSlice, nanoid } from '@reduxjs/toolkit';

// THEN WE NEED TO CREATE THE INITIAL STATE :-->
const initialState = {
  todos: [
    {
      id: 1,
      text: 'Hello world',
    },
  ],
};

// THEN, WE ARE CREATING A SLICE WHICH WILL CONTAIN THE NAME OF OR SLICE AND ITS INITIAL STATE :->
export const todoSlice = createSlice({
  name: 'todo',
  initialState,

  //reducers contains properties and function of our todo (operations on todo we are going to do. basically its crud operation states)
  reducers: {
    // HERE IN addTodo(state) "state" will give you the access of intitalState values.
    // HERE IN addTodo(action) we are providing values to this function as "action" argument .
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    // HERE WE ARE REMOVING THE TODO USING ID.
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

// WE NEED TO EXPORT ALL THE REDUCERS(ALL THE SLICE)
export default todoSlice.reducer;
