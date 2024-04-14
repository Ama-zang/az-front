import { AppRouter } from "./routes/routes";
import { theme } from "./libs/theme";
import { ThemeProvider } from "@mui/material";
import { queryClient, ReactQueryClientProvider } from "./libs/react-query";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReactQueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <AppRouter />;
        </SnackbarProvider>
      </ReactQueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
