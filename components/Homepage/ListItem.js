import React from "react";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";

function ListItem({ img, subtitle, timestamp, title }) {
  return (
    <div>
      <HStack w="800px" spacing="20px">
        <div>
          <Box w="650px">
            <Flex>
              <Text fontWeight="bold"> {title} </Text>
              <Spacer />
              <Text> {timestamp} </Text>
            </Flex>
          </Box>
          <Box w="650px">
            <Text> {subtitle} </Text>
          </Box>
        </div>
        <Spacer />
        <Image htmlWidth="100px" src={img} />
      </HStack>
      <br />
      <Divider />
    </div>
  );
}

export default ListItem;
