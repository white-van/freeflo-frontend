import { CircularProgress, Container, Image, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Editor from "react-medium-editor";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

const landscape =
  "https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg";

const placeholder =
  "https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png";

function Write() {
  const fileUpload = useRef(null);
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState(placeholder);
  const [text, setText] = useState("");

  const onImgClick = () => {
    fileUpload.current.click();
  };

  function fileSelectedHandler(e) {
    const file = e.target.files[0];
    setImgSrc("");
    setTimeout(() => {
      setImgSrc(landscape);
    }, 1500);
    //await postImg(...);
  }

  return (
    <Container size="xl" centerContent>
      <input
        id="file"
        type="file"
        style={{ display: "none" }}
        ref={fileUpload}
        onChange={fileSelectedHandler}
      />
      {imgSrc === "" ? (
        <CircularProgress isIndeterminate color="red.500" />
      ) : (
        <Image
          htmlHeight="1200"
          htmlWidth="800"
          onClick={onImgClick}
          src={imgSrc}
          style={{ cursor: "pointer" }}
        />
      )}

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
