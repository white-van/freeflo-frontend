import {
  Avatar,
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Article from "../../components/Article";
import styles from "./Review.module.css";

const Change = ({
  author,
  status,
  src,
  summary,
  linesAdded,
  linesRemoved,
  handleClick,
  onHover,
  onUnhover,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function renderStatusBadge(status) {
    switch (status) {
      case -1:
        return (
          <Badge mt={1} h="17px" colorScheme="red">
            Rejected
          </Badge>
        );
      case 1:
        return (
          <Badge mt={1} h="17px" colorScheme="green">
            Approved
          </Badge>
        );
      case 0:
        return (
          <Badge mt={1} h="17px" colorScheme="yellow">
            Pending
          </Badge>
        );
    }
  }

  return (
    <Stat
      borderWidth="1px"
      mt={4}
      className={styles.change}
      onClick={() => handleClick(summary)}
      onMouseEnter={() => onHover(summary)}
      onMouseLeave={onUnhover}
    >
      <Flex m={2}>
        <Avatar name={author} size="sm" src={src} />
        <StatLabel mt={1} ml={1}>
          {author}
        </StatLabel>
        {renderStatusBadge(status)}
      </Flex>
      {status === 0 ? (
        <>
          <StatNumber m={2}>{summary}</StatNumber>
          <StatHelpText m={2}>
            <StatArrow type="increase" />
            {linesAdded}
            <StatArrow type="decrease" />
            {linesRemoved}
          </StatHelpText>
        </>
      ) : null}
    </Stat>
  );
};

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

  const onHover = (changeText) => {
    if (previewText === changeText) return;
    setPreviewText(changeText);
  };

  const onUnhover = () => {
    setPreviewText(text);
  };

  const handleClick = (changeText) => {
    onClose();
    setText(changeText);
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
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Pending Changes</DrawerHeader>
          <DrawerBody>
            <Input placeholder="Search" />
            {diffs.map((diff, index) => {
              return (
                <Change
                  key={index}
                  {...diff}
                  handleClick={handleClick}
                  onHover={onHover}
                  onUnhover={onUnhover}
                />
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
            author: "jcserv",
            src:
              "https://avatars2.githubusercontent.com/u/45128231?s=400&u=96c06c111c351f4ea9bdb4171a10b3d2b04f3aba&v=4",
            summary: "The quick brown fox",
            linesAdded: 1,
            linesRemoved: 0,
            status: 0,
          },
          {
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
