import { Box, Typography, Link } from '@mui/material';
import { useEffect, useState } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      className="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '2rem 3rem 1rem',
        textAlign: 'center',
        backgroundColor: 'background.paper',
        zIndex: 1000,
        borderBottom: 2.5,
        borderColor: 'divider'
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: '2.2rem',
          fontWeight: 700,
          marginBottom: '0.3rem'
        }}
      >
        Hi, I'm Cooper Glavin
      </Typography>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: '1.2rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: 'text.secondary'
        }}
      >
        A Junior Web Dev based out of Washington, DC (.NET, Typescript, Python)
      </Typography>
      <Box
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '0.3rem'
        }}
      >
        <Link
          href="#about"
          onClick={scrollToSection('about')}
          sx={{
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 500,
            position: 'relative',
            color: 'text.primary',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '2px',
              bottom: '-4px',
              left: 0,
              backgroundColor: 'navigation.hover',
              transform: activeSection === 'about' ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease-in-out'
            },
            '&:hover': { 
              color: 'navigation.hover',
              '&:after': {
                transform: 'scaleX(1)'
              }
            }
          }}
        >
          About Me
        </Link>
        <Link
          href="#portfolio"
          onClick={scrollToSection('portfolio')}
          sx={{
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 500,
            position: 'relative',
            color: 'text.primary',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '2px',
              bottom: '-4px',
              left: 0,
              backgroundColor: 'navigation.hover',
              transform: activeSection === 'portfolio' ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease-in-out'
            },
            '&:hover': { 
              color: 'navigation.hover',
              '&:after': {
                transform: 'scaleX(1)'
              }
            }
          }}
        >
          Portfolio
        </Link>
        <Link
          href="#contact"
          onClick={scrollToSection('contact')}
          sx={{
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 500,
            position: 'relative',
            color: 'text.primary',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '2px',
              bottom: '-4px',
              left: 0,
              backgroundColor: 'navigation.hover',
              transform: activeSection === 'contact' ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.3s ease-in-out'
            },
            '&:hover': { 
              color: 'navigation.hover',
              '&:after': {
                transform: 'scaleX(1)'
              }
            }
          }}
        >
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Header; 