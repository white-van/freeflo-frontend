import {
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
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

import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

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
    setTabIndex(index);
  };

  return (
    <>
      <Modal
        preserveScrollBarGap={true}
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
              <Tab>Sign up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Center>
                  <Heading as="h2" size="lg">
                    Login
                  </Heading>
                </Center>
                <LoginForm closeAllModals={closeAllModals} />
              </TabPanel>
              <TabPanel>
                <Center>
                  <Heading as="h2" size="lg">
                    Sign up
                  </Heading>
                </Center>
                <SignupForm closeAllModals={closeAllModals} />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <ModalCloseButton />
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
