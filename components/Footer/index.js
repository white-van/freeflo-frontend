import { Box, HStack, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { DiRuby } from "react-icons/di";
import { FaDev, FaReact } from "react-icons/fa";
import styles from "./Footer.module.css";

const links = [
  {
    icon: FaReact,
    label: "GitHub - Frontend",
    href: "https://github.com/white-van/freeflo-frontend",
    color: "#61DBFB",
  },
  {
    icon: DiRuby,
    label: "Github - Backend",
    href: "https://github.com/white-van/freeflo-backend",
    color: "#cc0000",
  },
  {
    icon: FaDev,
    label: "Devpost",
    href: "https://devpost.com/",
    color: "#30D5C8",
  },
];

const contributors = [
  {
    name: "Noredeen Al-Zu'bi",
    href: "https://github.com/noredeen-alzubi",
  },
  {
    name: "Ritvik Bhardwaj",
    href: "https://github.com/AipioxTechson",
  },
  {
    name: "Niveditha Kani",
    href: "https://github.com/NivedithaK",
  },
  {
    name: "Jarrod Servilla",
    href: "http://jarrodservilla.com",
  },
];

const FooterLink = ({ color, icon, href, label }) => (
  <Link
    key={`link-${href}`}
    display="inline-block"
    href={href}
    aria-label={label}
    isExternal
  >
    <Icon
      key={`icon-${href}`}
      as={icon}
      fontSize="xl"
      color="gray.400"
      _hover={{ color }}
    />
  </Link>
);

function determineLineEnding(index) {
  switch (index) {
    case 2:
      return ", & ";
    case 3:
      return "";
    default:
      return ", ";
  }
}

const Footer = () => {
  return (
    <Box as="footer" className={styles.footer} textAlign="center">
      <Text mt={4} fontSize="md">
        {"Made with "}
        <span aria-label="heart" role="img">
          &#128156;
        </span>
        {" by "}
        {contributors.map((contributor, index) => (
          <>
            <Link key={`contributor-${contributor.href}`} {...contributor}>
              {contributor.name}
            </Link>
            {`${determineLineEnding(index)}`}
          </>
        ))}
        {" for "}
        <Link href="https://hackthenorth.com/" isExternal>
          Hack The North 2020++
        </Link>
      </Text>
      <HStack spacing="12px" justify="center">
        {links.map((link) => (
          <FooterLink key={`ftrlink-${link.href}`} {...link} />
        ))}
      </HStack>
    </Box>
  );
};

export default Footer;
