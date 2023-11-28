import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import theme from "./theme";
import Dashboard from "./pages/Dashboard";
import SenaraiAset from "./pages/SenaraiAset"; // You'll need to create this component
import Sidebar from "./components/Sidebar"; // Assuming Sidebar is in the components folder
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar /> {/* This will always be displayed */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/senarai-aset" element={<SenaraiAset />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
