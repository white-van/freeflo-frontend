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
  Avatar,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaMoon, FaSun, FaBurn, FaSearch, FaRegBell } from "react-icons/fa";
import { connect } from "react-redux";

import { isAuthenticatedSelector } from "../../stores/user/selectors";
import { toggleModal } from "../../stores/ui/actions";

const LoggedInActions = [FaSearch, FaRegBell];

const drawerItems = [
  {
    href: "/",
    name: "Dashboard",
  },
  {
    href: "/user",
    name: "Profile",
  },
  {
    href: "/read",
    name: "Browse articles",
  },
  {
    href: "/write",
    name: "Write a new story",
  },
  {
    href: "/",
    name: "Settings",
  },
  {
    href: "/",
    name: "Log out",
  },
];

const LoggedInView = () => {
  const router = useRouter();
  const { pathname } = router;

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
      <Link href="/write"> 
        <Button
          mt="1"
          mr="1"
          size="sm"
          variant={useColorModeValue("primary", "primaryDark")}
        >
          {pathname === "/write" ? "Publish" : "Write"}
        </Button>
      </Link>
      <Menu>
        <MenuButton as={Button} variant="ghost" aria-label="Search database">
          <Avatar
            h="30px"
            w="30px"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </MenuButton>
        <MenuList>
          {drawerItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <MenuItem>{item.name}</MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

const LoggedOutActions = ["Login", "Sign up"];
const LoggedOutView = ({ toggleModal }) => {
  return (
    <>
      {LoggedOutActions.map((text, index) => (
        <Button
          m="1"
          key={index}
          size="sm"
          onClick={() => toggleModal(text.toLowerCase().replace(/\s/g, ""))}
          variant={useColorModeValue("primary", "primaryDark")}
        >
          {text}
        </Button>
      ))}
    </>
  );
};
export const Navbar = ({ isAuthenticated, toggleModal }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");
  const boxBg = useColorModeValue("blue.200", "blue.500");

  return (
    <Flex w="101%" mb="4" as="nav" bg={boxBg} boxShadow="lg">
      <Box mt="4" ml="4">
        <Link href="/">
          <Icon as={FaBurn} style={{ cursor: "pointer" }} />
        </Link>
      </Box>
      <Box mt="4" ml="4">
        <Link href="/">
          <Heading size="small" style={{ cursor: "pointer" }}>
            freeflo.io
          </Heading>
        </Link>
      </Box>
      <Spacer />

      <Box m="2">
        <Flex>
          {isAuthenticated ? (
            <LoggedInView />
          ) : (
            <LoggedOutView toggleModal={toggleModal} />
          )}

          <IconButton
            size="sm"
            fontSize="lg"
            aria-label={`Switch to ${nextMode} mode`}
            variant="ghost"
            color="current"
            margin="1"
            mr="4"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

export default connect(mapStateToProps, {
  toggleModal,
})(Navbar);
