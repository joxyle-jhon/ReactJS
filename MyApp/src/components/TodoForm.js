import React, {useState} from 'react'


const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    addTodo(value)
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='What is up you today?' 
        onChange={(e) => console.log(e.target.value)}/>

        <button type='submit' className='todo-btn'>
          Add Task
        </button>
      
    </form>
  )
}

export default TodoForm