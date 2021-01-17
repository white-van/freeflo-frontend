import React from 'react';
import { Container, Heading, VStack, Box, Divider } from "@chakra-ui/react";

import Related from "./Related"

function RelatedSection() {
    const listItems = [
        {
            img: "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg",
            title: "Cool article",
            subtitle: "The Dijkstra algorithm uses labels that are positive integers or real numbers, which are totally ordered. It can be generalized to use any labels.",
            timestamp: "5 hours ago",
          },
        {
            img: "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg",
            title: "Cool article",
            subtitle: "The Dijkstra algorithm uses labels that are positive integers or real numbers, which are totally ordered. It can be generalized to use any labels.",
            timestamp: "5 hours ago",
          },
        {
          img: "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg",
          title: "Cool article",
          subtitle: "The Dijkstra algorithm uses labels that are positive integers or real numbers, which are totally ordered. It can be generalized to use any labels.",
          timestamp: "5 hours ago",
        },
      ];

  return (
    <Container size="xl" centerContent p="50px">
      <Box w="700px">
        <Heading as="h4" size="md">
                Related Articles
        </Heading>
        <Divider />
        <br/>
        <VStack spacing="20px">
        {listItems.map((item, index) => {
          return <Related key={index} {...item} />;
        })}
        </VStack>
      </Box>
    </Container>
  );
}
export default RelatedSection;