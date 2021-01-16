import React from 'react';
import { HStack, Avatar, Text } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

function ChooseIcon(props) {
    const iconindex = props.iconindex;
    if (iconindex == 0) {
      return <CheckIcon />;
    }
    return <CloseIcon />;
  }

function SingleEdit(props) {
    return (
        <div>
            <HStack spacing="30px">
                <Avatar name={props.name} src={props.avatar} />
                <div w="80%">
                    <Text fontWeight="extrabold"> {props.title} </Text>
                    <Text> {props.subtitle} </Text>
                </div>
                <ChooseIcon iconindex={props.iconindex} />,
            </HStack>
        </div>
    );
}

export default SingleEdit;