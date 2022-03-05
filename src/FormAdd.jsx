import React, { useState } from 'react';
function FormAdd({ addTodo }) {
  const [value, setValue] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    if (!value) return '';
    // setValue(addTodo(value));
    addTodo(value);
    setValue('');
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="inputs"
      />
      <button onClick={handleClick}>+</button>
    </div>
  );
}
export default FormAdd;
