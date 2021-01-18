import { CircularProgress, Container, Image, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Editor from "react-medium-editor";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

const landscape =
  "https://loadedlandscapes.com/wp-content/uploads/2019/07/lighting.jpg";

function Article({
  isReadOnly,
  title,
  text,
  imgSrc,
  setTitle,
  setText,
  setImgSrc,
}) {
  const fileUpload = useRef(null);

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
          onClick={isReadOnly ? null : onImgClick}
          src={imgSrc}
          style={{ cursor: isReadOnly ? "" : "pointer" }}
        />
      )}

      <Input
        isDisabled={isReadOnly}
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
          disableEditing: isReadOnly,

          toolbar: !isReadOnly
            ? {
                buttons: ["bold", "italic", "underline", "anchor"],
              }
            : false,
        }}
      />
    </Container>
  );
}

export default Article;
