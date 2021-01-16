import React from 'react';
import { Box, Flex, Spacer, HStack, Image, Text, Divider } from "@chakra-ui/react";

function ListItem(props) {
    return (
        <div>
        <HStack w="800px" spacing="20px">
            <div>
            <Box w="650px">
                <Flex>
                    <Text fontWeight="bold"> {props.title} </Text>
                    <Spacer />
                    <Text> {props.timestamp} </Text>
                </Flex>
            </Box>
            <Box w="650px">
            <Text> {props.subtitle} </Text>
            </Box>
            </div>
            <Spacer />
            <Image
                htmlWidth="100px"
                src={props.img}
            />
        </HStack>
        <br/>
        <Divider />
        </div>
    );
}

export default ListItem;