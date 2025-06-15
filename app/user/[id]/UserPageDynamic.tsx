"use client";

import dynamic from "next/dynamic";
import { User } from "@/types/user";
import UserPageSkeleton from "@/components/UserPageSkeleton";

const LazyUserPageClient = dynamic(() => import("./UserPageClient"), {
  loading: () => (
    <>
      <p className="text-center mt-4 text-gray-500">
        Загружаем данные пользователя...
      </p>
      <UserPageSkeleton />
    </>
  ),
  ssr: false,
});

export default function UserPageDynamic({ user }: { user: User }) {
  return <LazyUserPageClient user={user} />;
}
