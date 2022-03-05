import React, { useState } from 'react';
function Todo({ addTodos, index, removeElements, markTodo }) {
  return (
    <div>
      <span style={{ textDecoration: addTodos.isDone ? 'line-through' : '' }}>
        {addTodos.text}
      </span>
      <button onClick={() => removeElements(index)}> ok</button>
      <button onClick={() => markTodo(index)}> {index}</button>
    </div>
  );
}
export default Todo;

{
  /* <button onClick={markTodo}> {index}</button> */
}
