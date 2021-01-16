import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { toastsSelector } from "../../stores/ui/selectors";

export const UnconnectedToastController = ({ toasts }) => {
  const toastController = useToast();
  const [displayedToasts, setDisplayedToasts] = useState({});

  useEffect(() => {
    if (toasts.length === 0) {
      toastController.closeAll();
    }

    toasts.forEach((toast) => {
      if (displayedToasts[toast.key]) return;
      displayedToasts[toast.key] = toast;
      setDisplayedToasts(displayedToasts);
      toastController({
        ...toast,
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
