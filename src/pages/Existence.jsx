import { Flex, Spacer, Text } from '@chakra-ui/react'
import SaveBtnAdmin from 'components/Btn/SaveBtnAdmin'
import ExistenceAdminTable from 'components/Table/ExistenceAdminTable'
import AdminHeader from 'layouts/AdminHeader'
import React from 'react'

function Existence() {
  return (
    <>
      <AdminHeader />
      <Flex alignItems='center' m={10}>
      <Text fontSize='4xl' mr={10}>مدیریت موجودی و قیمت ها</Text>
        <Spacer/>
        <SaveBtnAdmin />
      </Flex>
      <ExistenceAdminTable/>
    </>
  )
}

export default Existence