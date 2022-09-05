import { Button, Flex, Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import melon from "assets/images/melon.png";

function CountAndPrice({ posts, loading }) {
  if (loading) {
    return (
      <Spinner
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  // const [editFormData, setEditFormData] = useState({
  //   fullName: "",
  //   address: "",
  //   phoneNumber: "",
  //   email: "",
  // });

  // const [editContactId, setEditContactId] = useState(null);

  // const handleEditFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...editFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setEditFormData(newFormData);
  // };

  return (
    <>
      <Flex justify="center" w>
        <TableContainer maxW="1200px">
          <Table w="800px" variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Count</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.map((post) => (
                <Tr key={post.id}>
                  <Td>
                    <Image borderRadius="full" boxSize="40px" src={post.image} alt="melon" />
                  </Td>
                  <Td>{post.title}</Td>
                  <Td>
                    <Popover>
                      <PopoverTrigger>
                      <Button>{post.rating.count}</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        {/* <PopoverCloseButton dir="ltr"/> */}
                        <PopoverHeader>Enter number of product</PopoverHeader>
                        <PopoverBody><Input placeholder='Number' /></PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Td>
                  <Td>
                  <Popover>
                      <PopoverTrigger>
                      <Button>{post.price} $</Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        {/* <PopoverCloseButton dir="ltr"/> */}
                        <PopoverHeader>Enter price of product</PopoverHeader>
                        <PopoverBody><Input placeholder='Price' /></PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}

export default CountAndPrice;
