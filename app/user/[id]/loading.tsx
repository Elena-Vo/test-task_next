import UserPageSkeleton from "@/components/UserPageSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      <p className="text-gray-500 text-lg">Загружаем данные пользователя...</p>
      <UserPageSkeleton />
    </div>
  );
}
