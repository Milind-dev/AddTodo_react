import React, { useState } from 'react';
import FormAdd from './FormAdd';
import Todo from './Todo';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([{ text: 'hello', isDone: false }]);

  console.log(todos);

  const addTodo = (text) => {
    var newtodos = [...todos, { text }];
    setTodos(newtodos);
  };
  const removeElements = (index) => {
    var newtodos = [...todos];
    newtodos.splice(index, 1);
    setTodos(newtodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  return (
    <div>
      <label> todo </label>
      <FormAdd addTodo={addTodo} />
      {todos.map((item, index) => {
        return (
          <Todo
            key={index}
            index={index}
            addTodos={item}
            removeElements={removeElements}
            markTodo={markTodo}
          />
        );
      })}
    </div>
  );
}
