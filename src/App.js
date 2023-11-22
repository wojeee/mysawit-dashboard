import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Dashboard from "./components/Dashboard"; // Assuming this is the correct path
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard /> {/* Only render the Dashboard component */}
    </ThemeProvider>
  );
}

export default App;
