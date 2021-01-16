import React from 'react';
import { Divider, Heading, VStack, Box } from "@chakra-ui/react";

import SingleEdit from "./SingleEdit"

function FollowRecs() {
  return (
    <div>
      <Box w="300px">
        <Heading as="h3" size="lg">
            Who to Follow
        </Heading>
        <Divider />
        <br></br>
        <VStack spacing="20px">
        <SingleEdit name="Bob Joe" avatar="https://bit.ly/dan-abramov" title="Bob Joe" subtitle="Human being" iconindex={3}/>
        <SingleEdit name="Bob Joe" avatar="https://bit.ly/dan-abramov" title="Another Bob" subtitle="Human being" iconindex={3}/>
        <SingleEdit name="Bob Joe" avatar="https://bit.ly/dan-abramov" title="More Bob" subtitle="Human being" iconindex={3}/>
        </VStack>
      </Box>
    </div>
  );
}

export default FollowRecs;