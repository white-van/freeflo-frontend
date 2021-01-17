import React from "react";
import { VStack, Box } from "@chakra-ui/react";

import ArticleItem from "./ArticleItem";

function RecommendedArticleList({ recommendedArticles }) {
  return (
    <Box mt={4}>
      <VStack spacing="20px">
        {recommendedArticles.map((article, index) => {
          return <ArticleItem key={index} {...article} />;
        })}
      </VStack>
    </Box>
  );
}
export default RecommendedArticleList;
