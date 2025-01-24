import React from 'react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

function TodoList({ todos, onDeleteTodo, onToggleComplete }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <div 
            key={index} 
            className={`todo ${todo.completed ? 'completed' : ''}`}
          >
            <li className="todo-item">{todo.text}</li>
            <button 
              className="complete-btn" 
              onClick={() => onToggleComplete(index)}
            >
              <FaCheckCircle />
            </button>
            <button 
              className="trash-btn" 
              onClick={() => onDeleteTodo(index)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;