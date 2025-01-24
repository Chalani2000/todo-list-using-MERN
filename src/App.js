import React, { useState, useEffect } from 'react';
import { FaTrash, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(savedTodos);
  }, []);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'completed': return todo.completed;
      case 'incomplete': return !todo.completed;
      default: return true;
    }
  });

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <TodoForm 
        onAddTodo={addTodo} 
        onFilterChange={setFilter}
      />
      <TodoList 
        todos={filteredTodos} 
        onDeleteTodo={deleteTodo} 
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;