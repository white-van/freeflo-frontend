import React from "react";
import { VStack, Box } from "@chakra-ui/react";

import ListItem from "./ListItem";

const listItems = [
  {
    img: "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg",
    title: "Customer Service Initiatives",
    subtitle: "What does a great customer experience feel like? I have thought about this for a long time, both professionally as a consultant to several retail startups, and as an individual consumer, surveying the landscape from Target to Tiffany’s.",
    timestamp: "2 hours ago",
  },
  {
    img: "https://cdn-images-1.medium.com/fit/t/1600/480/1*R8M5hRIV1y9aQcvjJe5PTQ.jpeg",
    title: "Why I Love Remote Work",
    subtitle: "These are some of the things I can do because I’m fortunate to work for a company that lets me work from anywhere",
    timestamp: "5 hours ago",
  },
  {
    img: "https://miro.medium.com/max/4800/1*2x4xbhVVG2wIDf6CyxiUyg.jpeg",
    title: "Cool article",
    subtitle: "Hi",
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
