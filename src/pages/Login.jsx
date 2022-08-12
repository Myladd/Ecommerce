import React from "react";
import { FormControl, FormLabel, FormErrorMessage, Input, Button, Flex } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import PasswordInput from "components/Inputs/PasswordInput";

function Login() {
  function validateName(value) {
    let error;
    if (!value) {
      error = "نام کاربری را وارد کنید.";
    }
    return error;
  }

  return (
    <Flex justify="center">
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel>نام کاربری</FormLabel>
                  <Input {...field} placeholder="نام کاربری یا ایمیل" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <PasswordInput/>
            <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}

export default Login;
