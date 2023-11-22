import { createTheme } from "@mui/material/styles";

// Define the palette colors from your image (replace with the actual colors you want to use)
const paletteColors = {
  primary: "#056B05", // Example green, replace with your actual primary color
  secondary: "#05386B", // Example dark blue, replace with your actual secondary color
  error: "#FF6565", // Example red, replace with your actual error color
  background: "#EDF5E1", // Example background, replace with your actual background color
  card: "#FFF5D0", // Example yellow, replace with your actual card color
  // ... add more custom colors as needed
};

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: paletteColors.primary,
      contrastText: "#ffffff", // This sets the contrast text color to white
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
    grey: {
      500: "#9e9e9e",
      400: "#B1B1B1", // Or any grey shade you prefer
    },
    // Custom color for cards
    card: {
      main: paletteColors.card,
    },
    text: {
      primary: "#000000", // Adding primary text color
      secondary: paletteColors.grey[500], // Using the custom grey for secondary text
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
