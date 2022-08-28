import { Button, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
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
      title: 'آیا میخواهید حذف شود؟',
      text: "در صورت تایید کالا موردنظر حذف میشود.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'بله حذف شود'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fakestoreapi.com/products/${id}`, {
          method:'DELETE'
        }).then((res) => {
          if (res.status === 200) {
            console.log(res.json());
            Swal.fire(
              'حذف شد',
              'کالای موردنظر حذف گردید',
              'انجام شد'
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
                <Th>تصویر کالا</Th>
                <Th>نام کالا</Th>
                <Th>دسته بندی</Th>
                <Th>تعداد</Th>
                <Th>قیمت</Th>
                <Th>عملیات</Th>
              </Tr>
            </Thead>
            <Tbody>
                {posts.map((post) => (
                  <Tr key={post.id}>
                    <Td><Image borderRadius="full" boxSize="40px" src={post.image} alt="melon" /></Td>
                    <Td>{post.title}</Td>
                    <Td>{post.category}</Td>
                    <Td>{post.rating.count}</Td>
                    <Td>{post.price}</Td>
                    <Td><Button colorScheme='teal' size='md' onClick={onOpen}> ویرایش</Button><Button colorScheme='teal' size='md' mr={4} onClick={()=>handleRemove(post.id)}> حذف</Button></Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader dir="ltr">ویرایش اطلاعات محصول مورد نظر</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form.Group controlId="formFile" className="mb-3">
              <Text fontSize="xl">تصویر کالا:</Text>
              <Form.Control dir="ltr" type="file" />
            </Form.Group>
            <Text fontSize="xl">نام کالا:</Text>
            <Input placeholder="Basic usage" />
            <Text fontSize="xl">دسته بندی:</Text>
            <Select dir="ltr" placeholder="انتخاب کنید">
              <option value="option1">میوه</option>
              <option value="option2">سبزی</option>
              <option value="option3">حبوبات</option>
            </Select>
            <Editor editorState={editorState} onChange={setEditorState} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" ml={5} onClick={onClose}>
              بستن
            </Button>
            <Button variant="ghost">ویرایش</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Flex>
    </>
  );
};



export default Posts;
