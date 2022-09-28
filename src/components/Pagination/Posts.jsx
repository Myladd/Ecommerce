import { Button, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Swal from "sweetalert2";
// import { Form } from "react-bootstrap";
import { Editor, EditorState } from "draft-js";

const Posts = ({posts ,loading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

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


  const handleRemove = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fakestoreapi.com/products/${id}`, {
          method:'DELETE'
        }).then((res) => {
          if (res.status === 200) {
            console.log(res.json());
            Swal.fire(
              'Deleted',
              'Your product has been deleted.',
              'Ok'
            )      
          }
        }).then((res)=> {console.log(res);})
        }
    })
  }



  return (
    <>
      <Flex justify="center" w>
        <TableContainer maxW="1200px">
          <Table w="800px" variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Product Name</Th>
                <Th>Category</Th>
                <Th>Count</Th>
                <Th>Price</Th>
                <Th>Operation</Th>
              </Tr>
            </Thead>
            <Tbody>
                {posts.map((post) => (
                  <Tr key={post.id}>
                    <Td><Image borderRadius="full" boxSize="40px" src={post.image} alt="melon" /></Td>
                    <Td>{post.title}</Td>
                    <Td>{post.category}</Td>
                    <Td>{post.rating.count}</Td>
                    <Td>{post.price} $</Td>
                    <Td><Button colorScheme='teal' size='md' onClick={onOpen}>Edit</Button><Button colorScheme='teal' size='md' ml={4} onClick={()=>handleRemove(post.id)}> Delete</Button></Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/*<Form.Group controlId="formFile" className="mb-3">*/}
            {/*  <Text fontSize="xl">Image: </Text>*/}
            {/*  <Form.Control dir="ltr" type="file" />*/}
            {/*</Form.Group>*/}
            {/*<Text fontSize="xl">Product Name: </Text>*/}
            {/*<Input placeholder="Basic usage" />*/}
            {/*<Text fontSize="xl">Category: </Text>*/}
            {/*<Select dir="ltr" placeholder="Choose a category">*/}
            {/*  <option value="option1">Men's clothe</option>*/}
            {/*  <option value="option2">Women's clothe</option>*/}
            {/*  <option value="option3">Electronics</option>*/}
            {/*  <option value="option4">Jewelry</option>*/}
            {/*</Select>*/}
            {/*<Editor editorState={editorState} onChange={setEditorState} />*/}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" ml={5}>Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Flex>
    </>
  );
};



export default Posts;
