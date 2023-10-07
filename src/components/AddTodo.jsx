import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function AddTodo() {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    // HERE WE ARE CALLING DISPATCH ALONGWITH REDUCER IN IT.
    // DISPATCH IS NOTHING BUT SENDING DATA TO OUR SLICE.
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter todo.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
