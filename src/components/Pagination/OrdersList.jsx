import { Flex, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'

function OrdersList({posts, loading}) {
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
              <Th>شناسه</Th>
              <Th>نام</Th>
              <Th>زمان پبت شده</Th>
              <Th>وضعیت</Th>
            </Tr>
          </Thead>
          <Tbody>
              {posts.map((post) => (
                <Tr key={post.id}>
                  <Td>{post.id}</Td>
                  <Td>{post.name}</Td>
                  <Td>{post.time}</Td>
                  <Td>{post.status}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      </Flex>
  </>
  )
}

export default OrdersList