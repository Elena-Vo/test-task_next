
import UserCard from "@/components/UserCard";
import UserList from "@/components/UserList";

interface User {
  id: number
  name: string
  email: string
  company: {
    name: string
  }
}

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  if (!res.ok) {
    throw new Error("Не удалось загрузить пользователей");
  }
  const users: User[] = await res.json()

  
  return (
    <div>
      <main>
        <UserList users={users} />
      </main>
    </div>
  );
}
