import React from "react";
import { VStack } from "@chakra-ui/react";
import Article from "../../components/Article";
import CommentSection from "../../components/Article/CommentSection";
import RelatedSection from "../../components/Article/RelatedSection";

function Read() {
  return (
    <div>
      <Article isReadOnly={true} />
      <CommentSection />
      <RelatedSection />
    </div>
  );
}

export default Read;
