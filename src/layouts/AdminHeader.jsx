import { Box, Button, ButtonGroup, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function AdminHeader() {
  return (
      <Flex boxShadow='xl' minWidth="max-content" align="center" gap="2" w="100%" h="130px" bgGradient="linear(to-r,blue.300,green.300)">
        {/* <Flex></Flex> */}
        <Text fontSize="6xl" mr={10}>مدیریت فروشگاه</Text>
        <Spacer />
        <ButtonGroup gap="1">
          <Button colorScheme="blue" variant="outline">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "" };
              }}
              to={"/Products"}
            >
              کالاها
            </NavLink>
          </Button>
          <Button colorScheme="blue" variant="outline">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "" };
              }}
              to={"/Existence"}
            >
              موجودی و قیمت ها
            </NavLink>
          </Button>
          <Button colorScheme="blue" variant="outline">
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? "#fff" : "" };
              }}
              to={"/Orders"}
            >
              سفارش ها
            </NavLink>
          </Button>
        </ButtonGroup>
        <Spacer />
        <Box ml={10}>
          <NavLink to={"/"}>
            <Button colorScheme="green" variant="ghost">
              صفحه اصلی
            </Button>
          </NavLink>
        </Box>
      </Flex>
  );
}

export default AdminHeader;
