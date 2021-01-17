import React from "react";
import { Container, Divider, Heading, VStack, Box } from "@chakra-ui/react";

import Comment from "./Comment";

function CommentSection() {
  const listItems = [
    {
      commenter: "Bob Joe",
      avatar: "https://bit.ly/dan-abramov",
      body: "Cool comment body",
      timestamp: "5 hours ago",
    },
    {
      commenter: "Bob Joe",
      avatar: "https://bit.ly/dan-abramov",
      body: "Cool comment body",
      timestamp: "5 hours ago",
    },
    {
      commenter: "Bob Joe",
      avatar: "https://bit.ly/dan-abramov",
      body: "Cool comment body",
      timestamp: "5 hours ago",
    },
  ];

  return (
    <Container size="xl" centerContent>
      <Box w="700px">
        <Heading as="h4" size="md">
          Comments
        </Heading>
        <Divider w="700px" />
        <br></br>
        <VStack spacing="20px">
          {listItems.map((item, index) => {
            return <Comment key={index} {...item} />;
          })}
        </VStack>
      </Box>
    </Container>
  );
}

export default CommentSection;
