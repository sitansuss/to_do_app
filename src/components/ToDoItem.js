import React from "react";

function TodoItem({ index, todoListItems, toggleTodo, removeTodo }) {
  //const itemClasses = todoListItems.completed ? 'completed' : ''; // Conditional CSS class

  return (
    <div className="font-bold text-3xl ">
      <li
        className={`${
          todoListItems.completed ? "line-through text-green-600 " : ""
        } cursor-pointer`}
        onClick={() => toggleTodo(index)}
      >
        {todoListItems.description}
        <button className="text-red-500 mr-32 "  onClick={() => removeTodo(index)}>Remove</button>
      </li>
    </div>
  );
}

export default TodoItem;
