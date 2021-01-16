import React from 'react';
import { VStack, Box } from "@chakra-ui/react";

import ListItem from "./ListItem"

function ListSection() {
  return (
    <div>
      <Box w="300px">
        <VStack spacing="20px">
        <ListItem img="https://bit.ly/sage-adebayo" title="Cool article" subtitle="Definitely read this" timestamp="5 hours ago"/>
        <ListItem img="https://bit.ly/sage-adebayo" title="Cool article" subtitle="Definitely read this" timestamp="5 hours ago"/>
        <ListItem img="https://bit.ly/sage-adebayo" title="Cool article" subtitle="Definitely read this" timestamp="5 hours ago"/>
        </VStack>
      </Box>
    </div>
  );
}

//<ListItem img="https://bit.ly/sage-adebayo" title="Cool article" subtitle="Definitely read this" timestamp="5 hours ago"/>

export default ListSection;