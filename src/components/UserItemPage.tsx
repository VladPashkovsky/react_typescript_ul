import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/Types'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

interface UserItemPageParams {
  id: string
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  const goBack = () => {
    navigate('/users')
  }

  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h1>User page {user?.name}</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
    </div>
  )
}

export default UserItemPage