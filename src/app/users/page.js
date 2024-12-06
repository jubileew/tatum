"use client"
import UserPage from "../components/UserPage";
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
    <UserPage user={user}/>      
  );
}
