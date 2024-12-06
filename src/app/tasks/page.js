"use client"
import TaskPage from "../components/TaskPage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../contexts/UserContext";

export default function Users() {
    const { user } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
          router.push("/");
        }
      }, [user, router]);
    
    if (user === null) {
        return null;
    }

  return (
    <TaskPage user={user}/>
  );
}
