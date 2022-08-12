import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Flex justify="center" mt={6}>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          {pageNumbers.map((number) => (
            <Tab key={number} onClick={() => paginate(number)}>
              {number}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default Pagination;
