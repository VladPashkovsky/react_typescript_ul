import React, { FC } from 'react'
import { IToDo } from '../types/Types'

interface ToDoProps {
  todo: IToDo
}

const ToDoItem: FC<ToDoProps> = ({todo}) => {
  return (
    <div>
      <input type='checkbox' checked={todo.completed}/>
      {todo.id}. {todo.title}
    </div>
  )
}

export default ToDoItem