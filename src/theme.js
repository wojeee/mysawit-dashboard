import { createTheme } from "@mui/material/styles";

// New palette colors with shades
const paletteColors = {
  primary: {
    light: "#83c683",
    main: "#4CAF50",
    dark: "#357a38",
    contrastText: "#ffffff",
  },
  secondary: {
    light: "#be9c91",
    main: "#8BC34A",
    dark: "#5a9216",
    contrastText: "#000000",
  },
  error: {
    light: "#ffa4a2",
    main: "#E57373",
    dark: "#af4448",
    contrastText: "#ffffff",
  },
  background: {
    default: "#F1F8E9",
    paper: "#ffffff",
  },
  grey: {
    100: "#f5f5f5",
    500: "#BDBDBD",
    900: "#212121",
  },
  text: {
    primary: "#333333",
    secondary: "#575757",
    disabled: "#9e9e9e",
    hint: "#9e9e9e",
  },
  card: {
    main: "#FFFFFF",
  },
};

// Create a theme instance with the new palette colors.
const theme = createTheme({
  palette: {
    primary: {
      light: paletteColors.primary.light,
      main: paletteColors.primary.main,
      dark: paletteColors.primary.dark,
      contrastText: paletteColors.primary.contrastText,
    },
    secondary: {
      light: paletteColors.secondary.light,
      main: paletteColors.secondary.main,
      dark: paletteColors.secondary.dark,
      contrastText: paletteColors.secondary.contrastText,
    },
    error: {
      light: paletteColors.error.light,
      main: paletteColors.error.main,
      dark: paletteColors.error.dark,
      contrastText: paletteColors.error.contrastText,
    },
    background: {
      default: paletteColors.background.default,
      paper: paletteColors.background.paper,
    },
    grey: {
      100: paletteColors.grey[100],
      500: paletteColors.grey[500],
      900: paletteColors.grey[900],
    },
    text: {
      primary: paletteColors.text.primary,
      secondary: paletteColors.text.secondary,
      disabled: paletteColors.text.disabled,
      hint: paletteColors.text.hint,
    },
    card: {
      main: paletteColors.card.main,
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
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
