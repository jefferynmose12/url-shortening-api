import React, { useState } from 'react'
import SingleTodo from './SingleTodo';

function Todo() {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prevTodo) => {
            return [...prevTodo, input]
        })
        setInput('')
    }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                className=''
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className='' type='submit'>Add</button>
        </form>
        <div>
            {
                todos.map((todo, index) => 
                    <SingleTodo 
                        key={index}
                        id={index}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )
            }
        </div>
    </div>
  )
}

export default Todo