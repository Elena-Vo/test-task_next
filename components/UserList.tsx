import React from "react";
import UserCard from "./UserCard";
import { User } from "@/types/user";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  if (!users.length) {
    return (
      <div className="max-w-5xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Пользователи</h1>
        <p>Нет пользователей для отображения</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Пользователи</h1>
      <div className="grid grid-cols-3 gap-6 max-w-5xl">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
}
