import React from "react";
import { Divider, Heading, VStack } from "@chakra-ui/react";

import SingleEdit from "./SingleEdit";

function SidebarRecs({ title, data }) {
  return (
    <VStack alignItems="start" mt={4} w="300px">
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Divider />
      <VStack spacing="20px">
        {data.map((rec, index) => {
          return <SingleEdit key={index} iconindex={index} {...rec} />;
        })}
      </VStack>
    </VStack>
  );
}

export default SidebarRecs;
