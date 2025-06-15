import React from "react";
import { User } from "@/types/user";
import UserPageDynamic from "./UserPageDynamic";

interface UserPageProps {
  params: {
    id: string;
  };
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = params;

  // Запрос к API для получения данных пользователя по id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // выбрасываем ошибку — она перехватится в error.tsx
    throw new Error("Пользователь не найден");
  }

  const user = await res.json();

  return <UserPageDynamic user={user} />;
}
