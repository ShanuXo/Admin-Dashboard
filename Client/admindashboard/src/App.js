import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "Theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "Scenes/Layout";
import Dashboard from "Scenes/Dashboard";


function App() {
  //method to grab the state we have created
  const mode = useSelector((state) => state.global.mode);
  const theme=useMemo(() => createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/Dashboard" replace />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>      
    </div>
  );
}

export default App;
