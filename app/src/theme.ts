import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: "'Courier New', Courier, monospace",
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '1.2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },
};

export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    text: {
      primary: '#2A2A2A',
      secondary: '#565656',
    },
    background: {
      paper: '#ffffff',
      default: '#fafafa',
    },
    navigation: {
      hover: '#1976d2',
    },
  },
});

// // Dark theme settings
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', 
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    background: {
      paper: '#1e1e1e',
      default: '#121212',
    },
    navigation: {
      hover: '#FFD700',
    },
  },
});  

// Extend the default theme interface to include our custom colors
declare module '@mui/material/styles' {
  interface Palette {
    navigation: {
      hover: string;
    };
  }
  interface PaletteOptions {
    navigation: {
      hover: string;
    };
  }
}