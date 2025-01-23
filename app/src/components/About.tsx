import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        minHeight: '100vh',
        paddingTop: '12rem',
        paddingBottom: '4rem',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ marginBottom: '2rem' }}>
          About Me
        </Typography>
        <Typography variant="body1">
          Hello! I'm Cooper, a passionate Junior Software Engineer with a love for building innovative solutions. 
          I specialize in full-stack development and enjoy tackling complex problems.
        </Typography>
        <Typography variant="body1">
          When I'm not coding, you can find me [Your Interests/Hobbies]. I believe in continuous learning 
          and staying up-to-date with the latest technologies and best practices in software development.
        </Typography>
        <Typography variant="body1">
          Currently, I'm focused on [Your Current Focus/Technologies] and always looking for new challenges 
          and opportunities to grow as a developer.
        </Typography>
      </Container>
    </Box>
  );
};

export default About; 