import React from "react";
import { VStack, Box } from "@chakra-ui/react";

import ListItem from "./ListItem";

const subtitle =
  "The Dijkstra algorithm uses labels that are positive integers or real numbers, which are totally ordered. It can be generalized to use any labels.";
const pic =
  "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg";

const listItems = [
  {
    img: pic,
    title: "Why Django Sucks",
    subtitle,
    timestamp: "2 hours ago",
  },
  {
    img: pic,
    title: "React 101",
    subtitle,
    timestamp: "5 hours ago",
  },
  {
    img: pic,
    title: "Cool article",
    subtitle,
    timestamp: "5 hours ago",
  },
];

function ListSection() {
  return (
    <Box mt={4}>
      <VStack spacing="20px">
        {listItems.map((item, index) => {
          return <ListItem key={index} {...item} />;
        })}
      </VStack>
    </Box>
  );
}
export default ListSection;
