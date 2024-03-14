import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removetodo, updatetodo } from '../features/todo/todoSlice';

function Todos() {
  const [input, setInput] = useState('');
  const [editTodoId, setEditTodoId] = useState(null); // Track which todo is being edited
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdate = (id) => {
    setEditTodoId(id); // Set the id of the todo being edited
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpdateSubmit = (id) => {
    if (input.trim() !== "") {
      dispatch(updatetodo({ id, newText: input }));
      setInput(''); // Clear input field after update
      setEditTodoId(null); // Reset edit state
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editTodoId === todo.id ? (
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                autoFocus // Set focus on input field
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            <button
              onClick={() => dispatch(removetodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate(todo.id)}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Update
            </button>
            {editTodoId === todo.id && (
              <button
                onClick={() => handleUpdateSubmit(todo.id)}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Submit
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
