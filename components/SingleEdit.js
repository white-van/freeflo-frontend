import React from 'react';
import { Flex, Spacer, HStack, Avatar, Text, IconButton, Icon } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

function ChooseIcon(props) {
    const iconindex = props.iconindex;
    if (iconindex == 0) {
      return <CheckIcon />;
    }
    if (iconindex == 1) {
      return <CloseIcon />;
    }
    if (iconindex == 2) {
        return <Icon as={BiDotsHorizontalRounded} />
    }
    if (iconindex == 3) {
        return <IconButton aria-label="Follow" icon={<AiOutlineUserAdd/>} />
    }
  }

function SingleEdit(props) {
    return (
        <div>
            <Flex>
            <HStack w="300px" spacing="20px">
                <Avatar name={props.name} src={props.avatar} />
                <div>
                    <Text fontWeight="extrabold"> {props.title} </Text>
                    <Text> {props.subtitle} </Text>
                </div>
                <Spacer />
                <ChooseIcon iconindex={props.iconindex} />
            </HStack>
            </Flex>
        </div>
    );
}

export default SingleEdit;