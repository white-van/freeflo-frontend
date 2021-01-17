import React from "react";
import {
  Link,
  Flex,
  HStack,
  Text,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";

function Comment(props) {
  return (
    <div>
      <Flex>
        <HStack w="700px" spacing="20px">
          <IconButton
            w={6}
            h={6}
            bg="none"
            aria-label="Like"
            icon={<FcLike />}
          />
          <div>
            <Text>{props.body}</Text>
            <HStack>
              <Link>
                <Text>{props.commenter}</Text>
              </Link>
              <Text>{props.timestamp}</Text>
            </HStack>
          </div>
        </HStack>
      </Flex>
      <br />
      <Divider w="700px" />
    </div>
  );
}

export default Comment;
