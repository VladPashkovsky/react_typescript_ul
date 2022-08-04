import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/Types'
import axios from 'axios'
import UserItem from './UserItem'
import List from './List'
import {useNavigate} from 'react-router-dom'

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  const goUserId = (user: any) => {
    navigate('/users/' + user.id)
  }

  return (
    <List items={users} renderItem={(user: IUser) => <UserItem onClick={goUserId} user={user} key={user.id} />} />
  )
}

export default UserPage