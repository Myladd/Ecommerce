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
      <Text fontSize='4xl' mr={10}>Count And Price List</Text>
        <Spacer/>
        <SaveBtnAdmin />
      </Flex>
      <ExistenceAdminTable/>
    </>
  )
}

export default Existence