import React from 'react';
import { IconButton, Avatar, Box, Flex, Spacer, HStack, Image, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function MegaFeature(props) {
    return (
        <div>
            <HStack>
            <Image
                htmlWidth="400px"
                objectFit="cover"
                src={props.img}
            />
            <Spacer/>
            <div>
            <Flex>
            <HStack w="400px" spacing="20px">
                <Avatar name={props.name} src={props.avatar} />
                <div>
                    <Text fontWeight="extrabold"> {props.title} </Text>
                    <Text> {props.subtitle} </Text>
                </div>
                <Spacer />
                <IconButton
                colorScheme="facebook"
                aria-label="facebook"
                icon={<FaFacebook />}
                />
                <IconButton
                colorScheme="twitter"
                aria-label="twitter"
                icon={<FaTwitter />}
                />
            </HStack>
            </Flex>
            <Box w="400px">
            <br/>
            For a given source node in the graph, the algorithm finds the shortest path between that node and every other.[8]:196–206 It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined. 
            </Box>
            </div>
            </HStack>
        </div>
    );
}

export default MegaFeature;