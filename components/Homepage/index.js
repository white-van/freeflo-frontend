import React from 'react';
import { HStack, VStack, Box, Spacer } from "@chakra-ui/react";

import ListSection from "./ListSection"
import MegaFeature from "./MegaFeature"
import ReviewRequest from "./ReviewRequest"
import FollowRecs from "./FollowRecs"

function Homepage() {
  const featurepic = "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg" avatar="https://bit.ly/dan-abramov"
  const featureauthor = "Naruto Uzumaki"
  const featuretitle = "Best article ever"
  const featuretimestamp = "5 hours ago"

  return (
    <div>
      <HStack spacing="80px">
          <VStack spacing="20px">
            <MegaFeature img={featurepic} title={featureauthor} subtitle={featuretitle} timestamp={featuretimestamp}/>
            <Spacer/>
            <ListSection/>
          </VStack>
        <VStack spacing="20px">
        <Box w='250px'>
            <ReviewRequest />
        </Box>
        <Box w='250px'>
            <FollowRecs />
        </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default Homepage;