import {
  OptionsObject,
  SnackbarMessage,
  useSnackbar as notistackUseSnackbar,
} from "notistack";
import { useCallback } from "react";

export const useSnackbar = () => {
  const notistackEnqueueSnackbar = notistackUseSnackbar().enqueueSnackbar;

  const enqueueSnackbar = useCallback(
    (message: SnackbarMessage, options: OptionsObject) => {
      if (options.variant === "error") {
        return notistackEnqueueSnackbar(message, {
          autoHideDuration: 5000,
          ...options,
        });
      }
      return notistackEnqueueSnackbar(message, options);
    },
    [notistackEnqueueSnackbar]
  );

  return { enqueueSnackbar };
};
