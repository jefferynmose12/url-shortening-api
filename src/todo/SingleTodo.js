import React, {useState} from 'react'

function SingleTodo({todo, id, todos, setTodos}) {
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(todo);

    const handleSubmit = (e, id) => {
        e.preventDefault();
        setTodos(
            todos.map((todo, index) => (index === id ? [editTodo] : todo))
        )
        setEdit(false)
    }

  return (
    <div className='flex justify-between'>
        <form onSubmit={(e) => handleSubmit(e, id)}>
            {
                edit ? (<input className='bg-red-500 text-white' value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />) : (<p>{todo}</p>)
            }
        </form>
        <button onClick={() => setEdit(!edit)}>edit</button>
    </div>
  )
}

export default SingleTodo