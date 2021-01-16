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
import { connect } from "react-redux";

import { closeAllModals } from "../../stores/ui/actions";
import { isShowingSelector } from "../../stores/ui/selectors";

export function AccessModal({
  isLoginVisible,
  isSignupVisible,
  closeAllModals,
}) {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (isLoginVisible) {
      setTabIndex(0);
    } else {
      setTabIndex(1);
    }
  }, [isLoginVisible, setTabIndex]);

  const handleTabsChange = (index) => {
    console.log(index);
    setTabIndex(index);
  };

  return (
    <>
      <Modal
        isOpen={isLoginVisible || isSignupVisible}
        onClose={closeAllModals}
      >
        <ModalOverlay />
        <ModalContent>
          <Tabs
            index={tabIndex}
            variant="soft-rounded"
            colorScheme="green"
            onChange={handleTabsChange}
          >
            <TabList justifyContent="center" m={4}>
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>Hey I'm the login</ModalBody>
              </TabPanel>
              <TabPanel>
                <ModalHeader>Signup</ModalHeader>
                <ModalBody>Hey I'm the signup</ModalBody>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <ModalCloseButton />
          <ModalFooter>
            <Button mr={3} variant="outline" onClick={closeAllModals}>
              Close
            </Button>
            <Button colorScheme="pink">Login</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
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
