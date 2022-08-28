import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { Editor, EditorState } from "draft-js";
import 'draft-js/dist/Draft.css';
import React, { useEffect} from "react";
import { Form } from "react-bootstrap";

function AddBtnAdmin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  
  // const [contacts, setContacts] = useState();
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
        افزودن کالا
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader dir="ltr">افزودن کالا</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form.Group controlId="formFile" className="mb-3">
              <Text fontSize="xl">تصویر کالا:</Text>
              <Form.Control dir="ltr" type="file" />
            </Form.Group>
            <Text fontSize="xl">نام کالا:</Text>
            <Input placeholder="Basic usage" name="name"/>
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
            <Button variant="ghost">افزودن</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddBtnAdmin;
