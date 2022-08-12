import { Button, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React, { useState } from "react"

function PasswordInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <>
    <FormLabel mt={4}>رمز عبور</FormLabel>
    <InputGroup size='md' mt={1}>
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='رمز عبور را وارد کنید'
      />
    </InputGroup>
    </>
  )
}

export default PasswordInput