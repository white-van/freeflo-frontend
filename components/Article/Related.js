import React from 'react';
import { Link, Box, Flex, Spacer, HStack, Image, Text, Divider } from "@chakra-ui/react";

function Related(props) {
    return (
        <div>
        <HStack w="700px" spacing="20px">
            <Image
                htmlWidth="100px"
                src={props.img}
            />
            <div>
            <Box w="550px">
                <Flex>
                    <Link>
                    <Text fontWeight="bold"> {props.title} </Text>
                    </Link>
                    <Spacer />
                    <Text> {props.timestamp} </Text>
                </Flex>
            </Box>
            <Box w="550px">
            <Text> {props.subtitle} </Text>
            </Box>
            </div>
            <Spacer />
        </HStack>
        <br/>
        <Divider />
        </div>
    );
}

export default Related;