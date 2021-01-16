import React from 'react';
import { Heading, VStack, Box } from "@chakra-ui/react";

import RelatedArticle from "./RelatedArticle"

function RelatedArticleSection() {
  const subtitle = "The Dijkstra algorithm uses labels that are positive integers or real numbers, which are totally ordered. It can be generalized to use any labels."
  const pic = "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg"
  return (
    <div>
      <Box w="800px">
      <Heading as="h4" size="md">
            Related Articles
        </Heading>
        <br/>
        <VStack spacing="20px">
        <RelatedArticle img={pic} title="Cool article" subtitle={subtitle} timestamp="5 hours ago"/>
        <RelatedArticle img={pic} title="Cool article" subtitle={subtitle} timestamp="5 hours ago"/>
        <RelatedArticle img={pic} title="Cool article" subtitle={subtitle} timestamp="5 hours ago"/>
        </VStack>
      </Box>
    </div>
  );
}
export default RelatedArticleSection;