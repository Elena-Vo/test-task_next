import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { User } from "@/types/user";

type UserCardProps = Pick<User, "id" | "name" | "email" | "company">;

export default function UserCard({ id, name, email, company }: UserCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto px-6 bg-gray-50 shadow-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{name}</CardTitle>
        <CardDescription className="text-gray-500">{email}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1 text-gray-700 text-sm">
        <p>
          <strong>Компания:</strong> {company.name}
        </p>
        <p>
          <strong>Бизнес:</strong> {company.bs}
        </p>
        <p>
          <strong>Слоган:</strong> <em>{company.catchPhrase}</em>
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/user/${id}`}>
          <button className="text-blue-600 hover:underline text-sm font-medium transition-colors duration-200 hover:cursor-pointer">
            Смотреть профиль →
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
}
