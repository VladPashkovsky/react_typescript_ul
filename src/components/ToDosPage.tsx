import React, { FC, useEffect, useState } from 'react'
import { IToDo } from '../types/Types'
import axios from 'axios'
import List from './List'
import ToDoItem from './ToDoItem'

const ToDosPage: FC = () => {
  const [todo, setTodo] = useState<IToDo[]>([])

  useEffect(() => {
    fetchToDo()
  }, [])

  const fetchToDo = async () => {
    try {
      const response = await axios.get<IToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodo(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <List items={todo} renderItem={(todo: IToDo) => <ToDoItem todo={todo} key={todo.id} />} />
  )
}

export default ToDosPage