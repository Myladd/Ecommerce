import { Button, ButtonGroup, Center, Flex, Heading, Image, Input, Spacer } from "@chakra-ui/react";
import { BsFillBasket2Fill } from "react-icons/bs";
import logo from "assets/images/amazon.jpg";
import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {

    const state = useSelector((state)=> state.addItems)

  return (
    <Flex boxShadow="xl" p='4' align="center" gap="2" w="100%" h="130px" bgGradient="linear(to-r,blue.300,green.300)">
        <NavLink to='/'>
            <Center p="2" mr={10}>
                <Image borderRadius="full" boxSize="100px" src={logo} alt="logo" />
            </Center>
        </NavLink>
      <Center p="2">
        <Heading size="md">Amazon</Heading>
      </Center>
      <Input placeholder="Serach" w="300px" bg="none"/>
      <Spacer />
      <ButtonGroup gap="2" ml={10}>
        <NavLink to={"/Admin"}>
          <Button colorScheme="teal" variant="ghost">
            Admin
          </Button>
        </NavLink>
        <NavLink to={"/Cart"}>
          <Button colorScheme="teal">
            Basket ({state.length})   <BsFillBasket2Fill />
          </Button>
        </NavLink>
      </ButtonGroup>
    </Flex>
  );
}

export default Header;
