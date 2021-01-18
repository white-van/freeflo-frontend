import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  HStack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

import styles from "./Suggestion.module.css";

export default function Suggestion({
  id,
  author,
  status,
  src,
  summary,
  text,
  linesAdded,
  linesRemoved,
  acceptModification,
  previewSuggestion,
  modifySuggestion,
  resetPreview,
}) {
  const [isOpen, setIsOpen] = useState(status === 0);

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
    <Accordion
      allowToggle
      index={isOpen ? 0 : null}
      borderWidth="1px"
      mt={4}
      className={styles.change}
    >
      <AccordionItem>
        <AccordionButton onClick={() => setIsOpen(!isOpen)}>
          <HStack spacing="2">
            <Avatar name={author} size="sm" src={src} />
            <StatLabel mt={1} ml={1}>
              {author}
            </StatLabel>
            {renderStatusBadge(status)}
            <AccordionIcon style={{ float: "right" }} />
          </HStack>
        </AccordionButton>
        <AccordionPanel>
          <Stat onMouseEnter={() => previewSuggestion(text)}>
            <StatNumber m={2}>{summary}</StatNumber>
            <StatHelpText m={2}>
              <StatArrow type="increase" />
              {linesAdded}
              <StatArrow type="decrease" />
              {linesRemoved}
              <ButtonGroup size="sm" isAttached variant="outline" float="right">
                <Button
                  onClick={() => {
                    modifySuggestion(id, -1);
                    setIsOpen(false);
                    resetPreview();
                  }}
                >
                  <CloseIcon style={{ color: "red" }} />
                </Button>
                <Button
                  onClick={() => {
                    acceptModification(text);
                    modifySuggestion(id, 1);
                    setIsOpen(false);
                  }}
                >
                  <CheckIcon style={{ color: "green" }} />
                </Button>
              </ButtonGroup>
            </StatHelpText>
          </Stat>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
