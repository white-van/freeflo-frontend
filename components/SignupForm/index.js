import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function LoginForm({}) {
  return <></>;
}

const mapStateToProps = (state) => {
  const isShowing = isShowingSelector(state);
  return {
    isLoginVisible: isShowing.login,
    isSignupVisible: isShowing.signup,
  };
};

export default connect(mapStateToProps, {
  closeAllModals,
})(AccessModal);
