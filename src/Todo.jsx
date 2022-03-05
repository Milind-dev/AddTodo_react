import React, { useState } from 'react';

function Todo({ addTodos, index, removeElements, markTodo }) {
  return (
    <div>
      <span
        style={{
          textDecoration: addTodos.isDone ? 'line-through red' : '',
        }}
      >
        {addTodos.text}
      </span>
      <div>
        <button onClick={() => removeElements(index)}> remove</button>
        <button onClick={() => markTodo(index)}> completed</button>
      </div>
    </div>
  );
}
export default Todo;

{
  /* <button onClick={markTodo}> {index}</button> */
}
