import {Button, ButtonGroup, Center, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { BsFillBasket2Fill } from "react-icons/bs";
import logo from "assets/images/istockphoto-1205419959-1024x1024.jpg";
import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <Flex boxShadow='xl' align="center" gap="2" w="100%" h="130px" bgGradient="linear(to-r,blue.300,green.300)">
        <Center p="2" mr={10}>
          <Image borderRadius="full" boxSize="100px" src={logo} alt="logo" />
        </Center>
        <Center p="2">
          <Heading size="md">فروشگاه</Heading>
        </Center>
        <Spacer />
        <ButtonGroup gap="2" ml={10}>
          <NavLink to={"/Admin"}>
            <Button colorScheme="teal" variant="ghost">
              مدیریت
            </Button>
          </NavLink>
          <NavLink to={"/Payment"}>
            <Button colorScheme="teal">
              سبد خرید <BsFillBasket2Fill />
            </Button>
          </NavLink>
        </ButtonGroup>
      </Flex>
  );
}

export default Header;
