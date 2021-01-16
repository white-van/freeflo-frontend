import React from 'react';
import { Divider, Heading } from "@chakra-ui/react";

import SingleEdit from "./SingleEdit"

function ReviewRequest() {
  return (
    <div>
        <Heading as="h3" size="lg">
            Review Status
        </Heading>
        <Divider />
        <br></br>
        <SingleEdit name="Bob Joe" avatar="https://bit.ly/dan-abramov" title="Cool article" subtitle="Typo fix" iconindex={0}/>
    </div>
  );
}

export default ReviewRequest;