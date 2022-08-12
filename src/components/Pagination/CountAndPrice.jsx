import { Flex, Image, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'
import melon from "assets/images/melon.png"


function CountAndPrice({posts, loading}) {
  if (loading) {
    return <Spinner
      style={{
        "display": "flex",
        "justifyContent": "center",
        "margin": "auto"
      }}
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />;

  }
  return (
    <>
    <Flex justify="center" w>
      <TableContainer maxW="1200px">
        <Table w="800px" variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>تصویر کالا</Th>
              <Th>نام کالا</Th>
              <Th>تعداد</Th>
              <Th>قیمت</Th>
            </Tr>
          </Thead>
          <Tbody>
              {posts.map((post) => (
                <Tr key={post.id}>
                  <Td><Image borderRadius="full" boxSize="40px" src={melon} alt="melon" /></Td>
                  <Td>{post.name}</Td>
                  <Td>{post.count}</Td>
                  <Td>{post.price}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      </Flex>
  </>
  )
}

export default CountAndPrice