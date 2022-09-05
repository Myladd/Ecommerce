import { Flex, Spacer, Text } from "@chakra-ui/react";
import AddBtnAdmin from "components/Btn/AddBtnAdmin";
import ProductAdminTable from "components/Table/ProductAdminTable";
import AdminHeader from "layouts/AdminHeader";
import React from "react";

function Products() {
  return (
    <>
      <AdminHeader />
      <Flex alignItems='center' m={10}>
        <Text fontSize="4xl" mr={10}>
          Products List
        </Text>
        <Spacer/>
        <AddBtnAdmin />
      </Flex>
      <ProductAdminTable />
    </>
  );
}

export default Products;
