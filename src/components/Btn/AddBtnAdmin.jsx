import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Form } from "react-bootstrap";

function AddBtnAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="lg">
        افزودن کالا
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader dir="ltr">Modal Title</ModalHeader>
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
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddBtnAdmin;
