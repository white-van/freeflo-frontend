import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { toastsSelector } from "../../stores/ui/selectors";

export const UnconnectedToastController = ({ toasts }) => {
  const enqueueToast = useToast();
  const [displayedToasts, setDisplayedToasts] = useState({});

  useEffect(() => {
    toasts.forEach((toast) => {
      if (displayedToasts[toast.key]) return;
      displayedToasts[toast.key] = toast;
      setDisplayedToasts(displayedToasts);
      enqueueToast({
        ...toast,
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    });
  }, [toasts, displayedToasts]);
  return null;
};

const mapState = (state) => ({
  toasts: toastsSelector(state),
});

export default connect(mapState, null)(UnconnectedToastController);
