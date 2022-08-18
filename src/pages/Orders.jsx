import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react'
import AdminHeader from 'layouts/AdminHeader'
import React from 'react'

function Orders() {

  return (
    <>
      <AdminHeader />
      <Flex justify="flex-end" mt={6} ml={10}>
      <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab >سفارش های تحویل شده</Tab>
            <Tab >سفارش های در انتظار ارسال</Tab>
          </TabList>
        </Tabs>
      </Flex>
    </>
  )
}

export default Orders