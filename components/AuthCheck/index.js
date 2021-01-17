import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect } from "react-redux";

import { isAuthenticatedSelector } from "../../stores/user/selectors";

export const AuthCheck = ({ isAuthenticated }) => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/") {
      router.push("/");
    }
  }, [isAuthenticated, pathname, router]);
  return null;
};

const mapState = (state) => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

export default connect(mapState, null)(AuthCheck);
