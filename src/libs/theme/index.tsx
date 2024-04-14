import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "4px 0 0 0",
          fontSize: "14px",
        },
      },
    },
  },
});

export { theme };
