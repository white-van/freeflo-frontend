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

  const acceptModification = (changeText) => {
    if (text === changeText) return;
    setText(changeText);
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
    acceptModification,
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
        title: "Becoming a MCS TA at UTM",
        text:
          "TAs are an interal part of your universiy caeer — they lead tutorials/labs, provide guidance to students, mark assignments and tests, and answer Piazza questions. (No doubt you’ve already seen Naaz’s speedy response time if you’ve been TAed in one of her courses). The job is (in my opinion) really great — being able to see the progression of students’ understanding and helping them through the course content is really fulfilling. By teaching it, you also get to solidify your understanding in the course. In addition, the pay is solid as an undergrad — the current pay is <b>$46.24/hr</b> plus vacation pay. <br/><br/>By now, you’re probably thinking: wow sounds like a really great gig. Where do I start?",
        img:
          "https://mathsnoproblem.com/wp-content/uploads/2019/10/maths-no-problem-blog-november-04-teaching-assistants-adding-value-and-improving-learner-outcomes-HERO-1140x712.jpg",
        diffs: [
          {
            id: 1,
            author: "jcserv",
            src:
              "https://avatars2.githubusercontent.com/u/45128231?s=400&u=96c06c111c351f4ea9bdb4171a10b3d2b04f3aba&v=4",
            summary: "Added formatting",
            text:
              "TAs are an integral part of your university career — they lead tutorials/labs, provide guidance to students, mark assignments and tests, and answer Piazza questions. (No doubt you’ve already seen Naaz’s speedy response time if you’ve been TAed in one of her courses). The job is (in my opinion) really great — being able to see the progression of students’ understanding and helping them through the course content is <b>really fulfilling.</b> By teaching it, you also get to solidify your understanding in the course. In addition, the pay is solid as an undergrad — the current pay is <b>$46.24/hr</b> plus vacation pay. <br/><br/>By now, you’re probably thinking: wow sounds like a really great gig. <b>Where do I start?</b>",
            linesAdded: 1,
            linesRemoved: 0,
            status: 0,
          },
          {
            id: 2,
            author: "nivy",
            src:
              "https://avatars2.githubusercontent.com/u/34191104?s=400&u=db9b373c76a9e9b36b59ad676cc1bed43d7155f9&v=4",
            text:
              "TAs are an integral part of your university career — they lead tutorials/labs, provide guidance to students, mark assignments and tests, and answer Piazza questions. (No doubt you’ve already seen Naaz’s speedy response time if you’ve been TAed in one of her courses). The job is (in my opinion) really great — being able to see the progression of students’ understanding and helping them through the course content is really fulfilling. By teaching it, you also get to solidify your understanding in the course. In addition, the pay is solid as an undergrad — the current pay is <b>$46.24/hr</b> plus vacation pay. <br/><br/>By now, you’re probably thinking: wow sounds like a really great gig. Where do I start?",
            summary: "Typo fixes",
            linesAdded: 22,
            linesRemoved: 4,
            status: -1,
          },
        ],
      },
    },
  };
}
