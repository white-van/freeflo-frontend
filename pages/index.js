import { connect } from "react-redux";

import AccessModal from "../components/AccessModal";
import Dashboard from "../components/Dashboard";
import Landing from "../components/Landing";

import { isAuthenticatedSelector } from "../stores/user/selectors";

function Home({ isAuthenticated }) {
  return (
    <div style={{ height: "95vh" }}>
      <AccessModal />
      {!isAuthenticated ? <Landing /> : <Dashboard />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

export default connect(mapStateToProps, null)(Home);
