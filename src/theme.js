import { createTheme } from "@mui/material/styles";

// Define the palette colors from your image (replace with the actual colors you want to use)
const paletteColors = {
  primary: "#056B05",
  secondary: "#05386B",
  error: "#FF6565",
  background: "#EDF5E1",
  card: "#FFEB3B",
  grey: {
    500: "#9e9e9e", // Make sure this color is correctly defined
  },
  textPrimary: "#000000",
};

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: paletteColors.primary,
      contrastText: "#ffffff",
    },
    secondary: {
      main: paletteColors.secondary,
    },
    error: {
      main: paletteColors.error,
    },
    background: {
      default: paletteColors.background,
    },
    grey: paletteColors.grey, // Make sure grey is assigned correctly
    text: {
      primary: paletteColors.textPrimary,
      secondary: "#9e9e9e",
    },
    card: {
      main: paletteColors.card,
    },
  },
  typography: {
    fontFamily: "Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2.0rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.0rem",
      fontWeight: 500,
    },
    // You can add more typography settings such as font size, weight, etc.
  },
});

export default theme;
