import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { Editor, EditorState } from "draft-js";
import 'draft-js/dist/Draft.css';
import React, { useEffect, useState} from "react";
import { Form } from "react-bootstrap";

function AddBtnAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  
  const [contacts, setContacts] = useState();
  // const [addFormData, setAddFormData] = useState({
  //   name: "",
  //   address: "",
  //   price: "",
  //   count: "",
  // });

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      const res = await axios.get('http://localhost:3001/products');
      setContacts(res.data)
      // setLoading(false);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);
  // };

  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();

  //   const newContact = {
  //     fullName: addFormData.fullName,
  //     address: addFormData.address,
  //     phoneNumber: addFormData.phoneNumber,
  //     email: addFormData.email,
  //   };

  //   const newContacts = [...contacts, newContact];
  //   setContacts(newContacts);
  // };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="lg">
        Add Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form.Group controlId="formFile" className="mb-3">
              <Text fontSize="xl">Image: </Text>
              <Form.Control dir="ltr" type="file" />
            </Form.Group>
            <Text fontSize="xl">Product name: </Text>
            <Input placeholder="Basic usage" name="name"/>
            <Text fontSize="xl">Category: </Text>
            <Select dir="ltr" placeholder="Choose a category">
              <option value="option1">Men's clothe</option>
              <option value="option2">Women's clothe</option>
              <option value="option3">Electronics</option>
              <option value="option4">Jewelry</option>
            </Select>
            <Editor editorState={editorState} onChange={setEditorState} />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" ml={5} >Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddBtnAdmin;
