import { connect } from "react-redux";

import AccessModal from "../components/AccessModal";
import Dashboard from "../views/Dashboard";
import Landing from "../views/Landing";

import { userDataSelector } from "../stores/user/selectors";

function Home({ userData }) {
  return (
    <>
      <AccessModal />
      {userData ? <Landing /> : <Dashboard />}
    </>
  );
}

const mapStateToProps = (state) => ({
  userData: userDataSelector(state),
});

export default connect(mapStateToProps, null)(Home);
