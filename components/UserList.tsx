import React from "react"
import UserCard from "./UserCard"

interface User {
  id: number
  name: string
  email: string
  company: {
    name: string
  }
}

interface UserListProps {
  users: User[]
}

export default function UserList({ users }: UserListProps) {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto p-4">
      {users.map(user => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          company={user.company.name}
        />
      ))}
      
      
    </div>
  )
}