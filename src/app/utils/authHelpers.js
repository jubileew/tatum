import userList from '../data/user_list.json';
import { useRouter } from 'next/navigation';

export const handleLogin = (username) => {
    const user = userList.find((user) => user.userEmail === username);
    const router = useRouter();
    if (user) {
    console.log('User found:', user);
    router.push('/users')
    } else {
    alert('User not found. Please check your email.');
    }
};
