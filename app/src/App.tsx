import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { Box } from '@mui/material';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ 
        scrollBehavior: 'smooth',
        '& > section': {
          scrollMarginTop: '64px',
        }
      }}>
        <Header />
        <IconButton 
          sx={{ 
            position: 'fixed',
            top: 16,
            right: 16,
            zIndex: 1100  // header at 1000
          }}
          onClick={toggleTheme}
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <About />
        <Portfolio />
        <Contact />
      </Box>
    </ThemeProvider>
  );
};

export default App;
