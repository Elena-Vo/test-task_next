
import React from "react";
import Link from "next/link"
import UserList from "@/components/UserList";
import UserPageClient from "./UserPageClient";
import { User } from "@/types/user"

interface UserPageProps {
  params: {
    id: string; 
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = params;

  // Запрос к API для получения данных пользователя по id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  cache: 'no-store',
});

  if (!res.ok) {
  // выбрасываем ошибку — она перехватится в error.tsx
  throw new Error("Пользователь не найден");
}


  const user = await res.json();

  return (
    <UserPageClient user={user}/>
  );
}