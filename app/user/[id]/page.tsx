
import React from "react";
import Link from "next/link"
import UserList from "@/components/UserList";
import UserPageClient from "./UserPageClient";

/* import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" */

/* interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
} */

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

  /* const user: User = await res.json(); */
  const user = await res.json();

  return (
    <UserPageClient user={user}/>
    /* <Card className="max-w-xl mx-auto mt-8 p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-gray-700">
        <p><span className="font-semibold">Username:</span> {user.username}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Адрес:</span> {user.address.street}, {user.address.city}</p>
        <p><span className="font-semibold">Телефон:</span> {user.phone}</p>
        <p><span className="font-semibold">Вебсайт:</span> {user.website}</p>
        <p><span className="font-semibold">Компания:</span> {user.company.name}</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Назад
        </Link>
        
      </CardFooter>
    </Card> */
  );
}