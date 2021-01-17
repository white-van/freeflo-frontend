import styles from "../../styles/Home.module.css";
import { Center, Grid, GridItem } from "@chakra-ui/react";
import RecommendedArticleList from "../Dashboard/RecommendedArticleList";
import MegaFeature from "../Dashboard/MegaFeature";
import SidebarRecs from "../Dashboard/SidebarRecs";

import {
  mockRecommendedArticles,
  mockRecommendations,
  mockRequests,
} from "../../testing/data";

import { connect } from "react-redux";

function Dashboard({ recommendedArticles, reviews, suggestedUsers }) {
  return (
    <Center className={styles.home}>
      <Grid>
        <Grid templateColumns="repeat(3, 1fr)" className={styles.main}>
          <GridItem colSpan={2} mr={10}>
            <MegaFeature {...recommendedArticles[0]} />
            <RecommendedArticleList
              recommendedArticles={recommendedArticles.slice(1)}
            />
          </GridItem>
          <GridItem colSpan={1} mb={28}>
            <SidebarRecs title="Review Status" data={reviews} />
            <SidebarRecs title="Who to Follow" data={suggestedUsers} />
          </GridItem>
        </Grid>
      </Grid>
    </Center>
  );
}

const mapStateToProps = (state) => ({
  recommendedArticles: mockRecommendedArticles,
  reviews: mockRequests,
  suggestedUsers: mockRecommendations,
});

export default connect(mapStateToProps, null)(Dashboard);
