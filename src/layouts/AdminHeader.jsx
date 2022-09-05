import { Box, Button, ButtonGroup, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
      <Flex boxShadow='xl' p='4' minWidth="max-content" align="center" gap="2" w="100%" h="130px" bgGradient="linear(to-r,blue.300,green.300)">
        {/* <Flex></Flex> */}
        <Text fontSize="6xl" mr={10}>Admin Panel</Text>
        <Spacer />
        <ButtonGroup gap="1">
            <NavLink
                style={({ isActive }) => {
                    return { color: isActive ? "#fff" : "" };
                }}
                to={"/Products"}
            >
          <Button colorScheme="blue" variant="outline">
              Products
          </Button>
            </NavLink>
            <NavLink
                style={({ isActive }) => {
                    return { color: isActive ? "#fff" : "" };
                }}
                to={"/Existence"}
            >
          <Button colorScheme="blue" variant="outline">
              Price & Quantity
          </Button>
        </NavLink>
        </ButtonGroup>
        <Spacer />
        <Box ml={10}>
          <NavLink to={"/"}>
            <Button colorScheme="green" variant="ghost">
              Home
            </Button>
          </NavLink>
        </Box>
      </Flex>
  );
}

export default AdminHeader;
