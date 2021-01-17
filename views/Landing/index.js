import { connect } from "react-redux";
import {
  Button,
  Center,
  Grid,
  GridItem,
  Text,
  Heading,
} from "@chakra-ui/react";

function Landing() {
  return (
    <div>
      <Center>
        <Grid
          h="600px"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(15, 1fr)"
          gap={9}
        >
          <GridItem colSpan={8} colStart={2} rowStart={2} w="550px">
            <Heading as="h2" size="4xl">
              Version-control, meet journalism.
            </Heading>
          </GridItem>
          <GridItem rowSpan={3} colStart={10} colSpan={5} rowStart={2}>
            <img
              src="https://cdn.dribbble.com/users/2565022/screenshots/13873863/media/26f7365efaa8734508f34e640d92ba8d.gif"
              alt="Person studying"
            />
          </GridItem>
          <GridItem colSpan={8} colStart={2} colEnd={8} rowStart={3}>
            <Text>
              The simplest open-source article writing tool. Free and easy to
              use.
            </Text>
            <Text>
              Add suggestions on other articles, and accept and reject
              suggestions made by peers on your articles!
            </Text>
          </GridItem>
          <GridItem colSpan={8} colStart={2} rowStart={4}>
            <Button>Get Started</Button>
          </GridItem>
        </Grid>
      </Center>
    </div>
  );
}

export default connect(null, null)(Landing);
