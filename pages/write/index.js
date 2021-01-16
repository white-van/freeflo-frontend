import { Container, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Editor from "react-medium-editor";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

const landscape =
  "https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg";

function Write() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <Container size="xl" centerContent>
      <Image
        htmlHeight="1200"
        htmlWidth="800"
        src="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
        style={{ cursor: "pointer" }}
      />
      <Input
        mt={2}
        value={title}
        variant="unstyled"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        width="40vw"
        style={{ fontSize: "xx-large" }}
      />
      <Editor
        style={{
          marginTop: "1vh",
          width: "40vw",
          height: "100%",
          minHeight: "50vh",
          outline: "none",
          fontSize: "large",
        }}
        text={text}
        onChange={(e) => {
          setText(e);
        }}
        options={{
          toolbar: {
            buttons: ["bold", "italic", "underline", "anchor"],
          },
        }}
      />
    </Container>
  );
}

export default Write;
