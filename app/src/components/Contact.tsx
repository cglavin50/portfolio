import { Box, Typography, Container, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        minHeight: '100vh',
        paddingTop: '12rem',
        paddingBottom: '4rem',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ marginBottom: '2rem' }}>
          Get in Touch
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon color="primary" />
          <Link
            href="mailto:your.email@example.com"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            cooperglavin@gmail.com
          </Link>
        </Box>
        <Typography variant="body1" sx={{ marginTop: '2rem' }}>
          I'm always looking to learn and grow. If you have any questions or would like to connect, please reach out!
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact; 