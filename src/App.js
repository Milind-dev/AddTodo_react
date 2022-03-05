import React, { useState } from 'react';
import FormAdd from './FormAdd';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([{ text: 'hello', isDone: false }]);

  console.log(todos);

  const addTodo = (text) => {
    var newtodos = [...todos, { text }];
    setTodos(newtodos);
  };

  return (
    <div>
      <label> todo </label>
      <FormAdd addTodo={addTodo} />
      {todos.map((item, index) => {
        return (
          <div>
            <p>
              adding {index} {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
