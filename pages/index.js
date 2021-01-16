import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";

import { closeAllToasts, displaySuccessToast } from "../stores/ui/actions";
import { connect } from "react-redux";
import Homepage from "../components/Homepage"

function Home({ closeAllToasts, displaySuccessToast }) {
  return (
    <div className={styles.main}>
      <Homepage />
      <Button
        colorScheme="blue"
        onClick={() => displaySuccessToast("u fool", "im monky")}
      >
        Click me to dispatch a toast
      </Button>
      <Button colorScheme="red" onClick={() => closeAllToasts()}>
        Click me to dismiss all toasts
      </Button>
    </div>
  );
}

export default connect(null, {
  closeAllToasts,
  displaySuccessToast,
})(Home);