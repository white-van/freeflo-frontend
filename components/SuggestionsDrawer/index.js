import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Suggestion from "../../components/Suggestion";

export default function SuggestionsDrawer({
  isOpen,
  onClose,
  diffs,
  suggestionProps,
}) {
  const [search, setSearch] = useState("");

  return (
    <Drawer blockScrollOnMount={false} scrollBehavior="outside" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Pending Suggestions</DrawerHeader>
        <DrawerBody>
          <Input
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          {diffs.map((diff, index) => {
            return <Suggestion key={index} {...diff} {...suggestionProps} />;
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
