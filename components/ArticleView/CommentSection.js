import React from 'react';
import { Divider, Heading, VStack, Box } from "@chakra-ui/react";

import Comment from "./Comment"

function CommentSection() {
  return (
    <div>
        <Box w="700px">
            <Heading as="h4" size="md">
                Comments
            </Heading>
            <Divider w="700px"/>
            <br></br>
            <VStack spacing="20px">
            <Comment commenter="Bob Joe" avatar="https://bit.ly/dan-abramov" body="Cool comment body" timestamp="Jan 18, 2020"/>
            <Comment commenter="Bob Joe" avatar="https://bit.ly/dan-abramov" body="Cool comment body" timestamp="Jan 18, 2020"/>
            <Comment commenter="Bob Joe" avatar="https://bit.ly/dan-abramov" body="Cool comment body" timestamp="Jan 18, 2020"/>
            
            </VStack>
        </Box>
    </div>
  );
}

export default CommentSection;