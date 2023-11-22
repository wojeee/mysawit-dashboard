import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // make sure the path is correct
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
