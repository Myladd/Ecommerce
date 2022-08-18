import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react'

function OrdersFilter({ postsPerPage, totalPosts, paginate }) {
  
  return (
    <Flex justify="center" mt={6}>
    <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>سفارش های تحویل داده شده</Tab>
          <Tab>سفارش های در انتظار ارسال</Tab>
      </TabList>
    </Tabs>
  </Flex>
  )
}

export default OrdersFilter