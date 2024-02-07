import { CssBaseline, ThemeProvider } from "@mui/material";
import createTheme from "@mui/material/styles";
import { themeSettings } from "Theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";


function App() {
  //method to grab the state we have created
  const mode = useSelector((state) => state.global.mode);
  const theme=useMemo(() => createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
