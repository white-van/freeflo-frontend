import React from 'react';
import { Divider, Heading, VStack, Box } from "@chakra-ui/react";

import SingleEdit from "./SingleEdit"

function ReviewRequest() {
  return (
    <div>
        <Box w="300px">
            <Heading as="h4" size="md">
                Review Status
            </Heading>
            <Divider w="300px"/>
            <br></br>
            <VStack spacing="20px">
            <SingleEdit name="Bob Joe" avatar="https://bit.ly/dan-abramov" title="Cool article" subtitle="Typo fix" iconindex={2}/>
            <SingleEdit name="Bob Joe" avatar="https://bit.ly/dan-abramov" title="Cool article" subtitle="Typo fix" iconindex={2}/>
            <SingleEdit name="Bob Joe" avatar="https://bit.ly/dan-abramov" title="Cool article" subtitle="Typo fix" iconindex={2}/>
            </VStack>
        </Box>
    </div>
  );
}

export default ReviewRequest;