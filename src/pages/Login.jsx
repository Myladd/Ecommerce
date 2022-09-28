import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {useToken} from "auth/useToken";
import loginImg from "assets/images/72874-user-profile-v2.gif"
import { ToastContainer, toast } from 'react-toastify';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'

const Login = () => {

    const toast = useToast()
    const [token, setToken] = useToken()

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate()

    const onLoginClicked = async () => {
        const res = await axios.post('http://localhost:3001/auth/login', {
            username: userName,
            password: password
        }).catch((e) => {
            toast({
                title: 'User not found',
                description: "You don't have an account",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        })
        const {token} = res.data;
        setToken(token)
        navigate('/Admin')
    }




    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Username</FormLabel>
                                <Input type="text" value={userName} onChange={e => setUserName(e.target.value)}/>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    disabled={!userName ||userName.length > 10 || !password || password.length < 3} onClick={onLoginClicked}
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default Login