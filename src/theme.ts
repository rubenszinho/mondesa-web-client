import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A3C6D4',
      light: '#B8D4DF',
      dark: '#456a78', // Adjusted to be darker for better contrast
    },
    secondary: {
      main: '#B4C9A9',
      light: '#C5D6BC',
      dark: '#9BB590',
    },
    background: {
      default: '#F3F6F4',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#444B54',
      secondary: '#666D76',
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default theme;