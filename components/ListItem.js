import React from 'react';
import { Box, Flex, Spacer, HStack, Image, Text, Divider } from "@chakra-ui/react";

function ListItem(props) {
    return (
        <div>
        <HStack w="500px" spacing="20px">
            <div>
            <Box w="400px">
                <Flex>
                    <Text fontWeight="bold"> {props.title} </Text>
                    <Spacer />
                    <Text> {props.timestamp} </Text>
                </Flex>
            </Box>
            <Text> {props.subtitle} </Text>
            </div>
            <Spacer />
            <Image
                boxSize="80px"
                objectFit="cover"
                src={props.img}
            />
        </HStack>
        <br/>
        <Divider />
        </div>
    );
}

export default ListItem;