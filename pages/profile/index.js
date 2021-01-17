import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  VStack,
  Avatar,
  Button,
  Center,
  Grid,
  GridItem,
  Text,
  Heading,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import ListSection from "../../components/Dashboard/ListSection";

function Profile() {
  return (
    <div className={styles.home}>
      <Grid
        h="550px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        p="20px"
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Center>
            <VStack>
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <br />
              <Heading align="center"> Naruto Uzumaki </Heading>
              <Text> Technical writer </Text>
              <Text align="center" w="80%">
                {" "}
                Lorem epsim thingy idk that the real words are but here's a
                subtitle{" "}
              </Text>
              <HStack>
                <Button
                  colorScheme="facebook"
                  aria-label="facebook"
                  variant="ghost"
                >
                  <FaFacebook />
                </Button>
                <Button
                  colorScheme="twitter"
                  aria-label="twitter"
                  variant="ghost"
                >
                  <FaTwitter />
                </Button>
              </HStack>
              <br />
              <Button>Website</Button>
            </VStack>
          </Center>
        </GridItem>
        <GridItem colSpan={4} rowSpan={2}>
          <Tabs isFitted>
            <TabList>
              <Tab>Articles</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ListSection />
              </TabPanel>
              <TabPanel>
                <ListSection />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Grid>
    </div>
  );
}

export default Profile;
