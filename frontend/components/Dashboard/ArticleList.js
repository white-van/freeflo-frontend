import React from "react";
import { VStack, Box } from "@chakra-ui/react";

import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <Box mt={4}>
      <VStack spacing="20px">
        {articles.map((article, index) => {
          return <ArticleItem key={index} {...article} />;
        })}
      </VStack>
    </Box>
  );
}
export default ArticleList;
