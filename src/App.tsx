import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { buildTheme } from "./theme";
import { useDesignStyle } from "./hooks/useDesignStyle";
import AppRouter from "./router";

function App() {
  const { style } = useDesignStyle();
  const theme = useMemo(() => buildTheme(style), [style]);

  return (
    <ThemeProvider theme={theme} defaultMode="light">
      <CssBaseline />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
