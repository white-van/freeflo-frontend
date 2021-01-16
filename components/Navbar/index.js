import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  TabList,
  Tab,
  Tabs,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  FaMoon,
  FaSun,
  FaBurn,
  FaSearch,
  FaRegHeart,
  FaRegBell,
} from "react-icons/fa";

const LoggedInActions = [FaSearch, FaRegHeart, FaRegBell];
const LoggedInView = () => {
  return (
    <>
      <Tabs size="md" mt="1" mr="4" variant="soft-rounded">
        <TabList>
          {LoggedInActions.map((icon, index) => (
            <Tab key={index}>
              <Icon as={icon} />
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <Button
        mt="1"
        mr="1"
        size="sm"
        variant={useColorModeValue("primary", "primaryDark")}
      >
        Write
      </Button>
    </>
  );
};

const LoggedOutActions = ["Sign up", "Login"];
const LoggedOutView = () => {
  return (
    <>
      {LoggedOutActions.map((text, index) => (
        <Button
          m="1"
          key={index}
          size="sm"
          variant={useColorModeValue("primary", "primaryDark")}
        >
          {text}
        </Button>
      ))}
    </>
  );
};
export const Navbar = ({ isLoggedIn = true }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");
  const boxBg = useColorModeValue("blue.200", "blue.500");

  return (
    <Flex w="101%" mb="4" as="nav" bg={boxBg} boxShadow="lg">
      <Box mt="4" ml="4">
        <Icon as={FaBurn} />
      </Box>
      <Box mt="4" ml="4">
        <Heading size="small">FreeFlow.io</Heading>
      </Box>
      <Spacer />

      <Box m="2">
        <Flex>
          {isLoggedIn ? <LoggedInView/> : <LoggedOutView/>}
          <IconButton
            size="sm"
            fontSize="lg"
            aria-label={`Switch to ${nextMode} mode`}
            variant="ghost"
            color="current"
            margin="1"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Box>
    </Flex>
  );
};
export default Navbar;
