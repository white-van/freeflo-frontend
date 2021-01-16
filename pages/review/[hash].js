import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Article from "../../components/Article";
import SuggestionsDrawer from "../../components/SuggestionsDrawer";

export default function Review({ reviewData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [diffs, setDiffs] = useState(reviewData.diffs);
  const [title, setTitle] = useState(reviewData.title);
  const [imgSrc, setImgSrc] = useState(reviewData.img);
  const [text, setText] = useState(reviewData.text);
  const [previewText, setPreviewText] = useState(reviewData.text);

  const ArticleProps = {
    title,
    text,
    imgSrc,
    setTitle,
    setText,
    setImgSrc,
  };

  const previewSuggestion = (changeText) => {
    if (previewText === changeText) return;
    setPreviewText(changeText);
  };

  const resetPreview = () => {
    setPreviewText(text);
  };

  const modifySuggestion = (changeId, status) => {
    const newDiffs = diffs.map((diff) =>
      diff.id === changeId ? { ...diff, status } : diff
    );
    setDiffs(newDiffs);
  };

  const SuggestionProps = {
    resetPreview,
    previewSuggestion,
    modifySuggestion,
  };

  return (
    <>
      <Button onClick={onOpen} m={4}>
        View Suggestions
      </Button>

      <Article
        {...ArticleProps}
        text={isOpen ? previewText : text}
        isReadOnly={false}
      />

      <SuggestionsDrawer
        isOpen={isOpen}
        onClose={onClose}
        diffs={diffs}
        suggestionProps={SuggestionProps}
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { hash: "jdsAIOddsaw" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      reviewData: {
        id: 1,
        title: "Why Django Sucks",
        text: "Ok so basically i'm monky",
        img: "https://miro.medium.com/max/1000/1*czRJ6n4y6sXGWmaRwfsVow.jpeg",
        diffs: [
          {
            id: 1,
            author: "jcserv",
            src:
              "https://avatars2.githubusercontent.com/u/45128231?s=400&u=96c06c111c351f4ea9bdb4171a10b3d2b04f3aba&v=4",
            summary: "The quick brown fox",
            linesAdded: 1,
            linesRemoved: 0,
            status: 0,
          },
          {
            id: 2,
            author: "nivy",
            src:
              "https://avatars2.githubusercontent.com/u/34191104?s=400&u=db9b373c76a9e9b36b59ad676cc1bed43d7155f9&v=4",
            summary: "Although there are many ...",
            linesAdded: 22,
            linesRemoved: 4,
            status: -1,
          },
        ],
      },
    },
  };
}
