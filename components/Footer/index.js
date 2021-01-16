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

const FooterLink = ({ color, icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" _hover={{ color }} />
  </Link>
);

const Footer = () => {
  return (
    <Box as="footer" className={styles.footer} textAlign="center">
      <Text mt={4} fontSize="md">
        Made with{" "}
        <span aria-label="heart" role="img">
          &#128156;
        </span>{" "}
        by{" "}
        <Link href="https://github.com/noredeen-alzubi" isExternal>
          Noredeen Al-Zu'bi
        </Link>
        ,{" "}
        <Link href="https://github.com/AipioxTechson" isExternal>
          Ritvik Bhardwaj
        </Link>
        ,{" "}
        <Link href="https://github.com/NivedithaK" isExternal>
          Niveditha Kani
        </Link>
        , &{" "}
        <Link href="http://jarrodservilla.com" isExternal>
          Jarrod Servilla
        </Link>{" "}
        for{" "}
        <Link href="https://hackthenorth.com/" isExternal>
          Hack The North 2020++
        </Link>
      </Text>
      <HStack spacing="12px" justify="center">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </HStack>
    </Box>
  );
};

export default Footer;
