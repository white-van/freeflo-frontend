import styles from "../styles/Home.module.css";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import ListSection from "../components/Homepage/ListSection";
import MegaFeature from "../components/Homepage/MegaFeature";
import SidebarRecs from "../components/Homepage/SidebarRecs";

import { connect } from "react-redux";

const recommendations = [
  {
    name: "nivy",
    avatar:
      "https://avatars2.githubusercontent.com/u/34191104?s=400&u=db9b373c76a9e9b36b59ad676cc1bed43d7155f9&v=4",
    title: "@nivy",
    subtitle: "aka orange",
    iconindex: 3,
  },
  {
    name: "aipiox",
    avatar: "https://avatars1.githubusercontent.com/u/43301959?s=400&v=4",
    title: "@aipiox",
    subtitle: "robot revolution",
    iconindex: 3,
  },
  {
    name: "noor",
    avatar:
      "https://avatars3.githubusercontent.com/u/30037359?s=400&u=9e1182dbf652b1fa06e8c388dcec1d1099d33fe1&v=4",
    title: "@noor",
    subtitle: "uwaterloo!",
    iconindex: 3,
  },
];

const requests = [
  {
    name: "jcserv",
    avatar:
      "https://avatars2.githubusercontent.com/u/45128231?s=400&u=96c06c111c351f4ea9bdb4171a10b3d2b04f3aba&v=4",
    title: "@jcserv",
    subtitle: "typo fix",
    iconindex: 1,
  },
  {
    name: "aipiox",
    avatar: "https://avatars1.githubusercontent.com/u/43301959?s=400&v=4",
    title: "@aipiox",
    subtitle: "added paragraph",
    iconindex: 2,
  },
  {
    name: "noor",
    avatar:
      "https://avatars3.githubusercontent.com/u/30037359?s=400&u=9e1182dbf652b1fa06e8c388dcec1d1099d33fe1&v=4",
    title: "@noor",
    subtitle: "rephrasing",
    iconindex: 0,
  },
];

function Home() {
  const featureEpic =
    "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg";
  const featureAuthor = "Naruto Uzumaki";
  const featureTitle = "Best article ever";
  const featureTimestamp = "5 hours ago";
  const desc =
    "For a given source node in the graph, the algorithm finds the shortest path between that node and every other.[8]:196–206 It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined.";

  return (
    <Center className={styles.home}>
      <Grid>
        <Grid templateColumns="repeat(3, 1fr)" className={styles.main}>
          <GridItem colSpan={2} mr={10}>
            <MegaFeature
              img={featureEpic}
              desc={desc}
              title={featureAuthor}
              subtitle={featureTitle}
              timestamp={featureTimestamp}
            />
            <ListSection />
          </GridItem>
          <GridItem colSpan={1} mb={28}>
            <SidebarRecs title="Review Status" data={requests} />
            <SidebarRecs title="Who to Follow" data={recommendations} />
          </GridItem>
        </Grid>
      </Grid>
    </Center>
  );
}

export default connect(null, null)(Home);
