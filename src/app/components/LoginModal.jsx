import { useState, useEffect } from 'react';
import userList from "../data/user_list.json";
import { useRouter } from 'next/navigation';
import { useUserContext } from '../contexts/UserContext';
import { Flex, Heading, Button, TextField, Text, Strong } from '@radix-ui/themes';

const LoginModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const { useSetUser } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (username != '' && password != '') {
      setSubmitEnabled(true);
    }
  }, [username, password])

  const handleLogin = (username) => {
    const user = userList.find((user) => user.userEmail === username);
    if (user) {
    console.log('User found:', user);
    useSetUser(user);
    if(user.userRole === "Viewer") {
      router.push('/tasks');
    }
    else {
      router.push('/users');
    }
    } else {
    alert('User not found. Please check your email.');
    }
};

  const handleSubmit = () => {
    handleLogin(username);
  };

  return (
    <Flex justify="center" align="center" style={{padding:"100px", backgroundColor:"#12A594", width:"100vw", height:"100vh"}}>
      <Flex direction="column" gap="5" style={{backgroundColor:"white", padding:"100px", borderRadius:"10px", width:"25vw"}}>
        <Heading>로그인</Heading>
        <Text as="label" size="2">
        <Flex direction="column" gap="1">
          <Strong>이메일</Strong>
          <TextField.Root onChange={(e) => setUsername(e.target.value)} style={{padding:"4px"}} placeholder="이메일 주소를 입력해 주세요."/>
          </Flex>
        </Text>
        <Text as="label" size="2">
        <Flex direction="column" gap="1">
          <Strong>비밀번호</Strong>
          <input type="password" placeholder='비밀번호를 입력해 주세요.' style={{padding:"9px", border:"1px solid #D9D9D9", borderRadius:"3px"}} onChange={(e) => setPassword(e.target.value)}></input>
        </Flex>
        </Text>
          <Flex gap="2" justify="end">
            <Button variant="outline" color="gray" style={{color:"black"}}>Cancel</Button>
            <Button color="teal" onClick={handleSubmit} disabled={!submitEnabled}>Log-in</Button>
          </Flex>
        </Flex>
    </Flex>
  );
}

export default LoginModal;
