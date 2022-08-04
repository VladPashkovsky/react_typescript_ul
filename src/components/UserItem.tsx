import React, { FC } from 'react'
import { IUser } from '../types/Types'

interface UserlistProps {
  user: IUser,
  onClick: (user: IUser) => void
}

const UserItem: FC<UserlistProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ padding: '15px', border: '1px solid red' }}>
      {user.id}. {user.name} living in the {user.address.city} on {user.address.street}
    </div>
  )
}

export default UserItem