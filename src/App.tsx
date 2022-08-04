import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import UserPage from './components/UserPage'
import ToDosPage from './components/ToDosPage'
import UserItemPage from './components/UserItemPage'
import ToDoItemPage from './components/ToDoItemPage'

function App() {


  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todo</NavLink>
      </div>
      <Routes>
        <Route path='/users' element={<UserPage />} />
        <Route path='/todos' element={<ToDosPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todos/:id' element={<ToDoItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
