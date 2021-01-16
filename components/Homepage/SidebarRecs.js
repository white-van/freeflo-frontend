import React from "react";
import { Divider, Heading, HStack, VStack, Box, Flex } from "@chakra-ui/react";

import SingleEdit from "./SingleEdit";

const recommendations = [
  {
    name: "nivy",
    avatar: "https://bit.ly/dan-abramov",
    title: "@nivy",
    subtitle: "aka orange",
    iconindex: 3,
  },
  {
    name: "aipiox",
    avatar: "https://bit.ly/dan-abramov",
    title: "@aipiox",
    subtitle: "robot revolution",
    iconindex: 3,
  },
  {
    name: "noor",
    avatar: "https://bit.ly/dan-abramov",
    title: "@noor",
    subtitle: "uwaterloo!",
    iconindex: 3,
  },
];

function SidebarRecs({ title, data }) {
  return (
    <VStack alignItems="start" mt={4}>
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
