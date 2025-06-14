'use client';

import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { User } from "@/types/user"


export default function UserPageClient({ user }: { user: User }) {
  return (
    <Card className="max-w-xl mx-auto mt-8 p-6 bg-gray-50 rounded-xl shadow-lg border border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">{user.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-gray-700">
        {user.username && (
          <p><strong>Username:</strong> {user.username}</p>
        )}
        <p><strong>Email:</strong> {user.email}</p>

        {user.address && (
          <p><strong>Адрес:</strong> {user.address.street}, {user.address.city}</p>
        )}

        {user.phone && (
          <p><strong>Телефон:</strong> {user.phone}</p>
        )}

        {user.website && (
          <p><strong>Вебсайт:</strong> {user.website}</p>
        )}

        <p><strong>Компания:</strong> {user.company.name}</p>
      </CardContent>
      
      <CardFooter className="justify-end">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Назад
        </Link>
      </CardFooter>
    </Card>
  );
}