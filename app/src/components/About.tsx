import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';  // For Medium
import profilePic from '../assets/Cooper.jpg'; // Adjust path as needed

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '8rem 3rem 3rem',
        minHeight: '100vh',
        marginTop: '64px',
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '2rem', textAlign: 'center' }}>
          About Me
      </Typography>
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 4,
      }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hello! I'm Cooper, a passionate Junior Software Engineer with a love for building innovative solutions. 
            I specialize in full-stack development and enjoy tackling complex problems.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            When I'm not coding, you can find me [Your Interests/Hobbies]. I believe in continuous learning 
            and staying up-to-date with the latest technologies and best practices in software development.
          </Typography>
          <Typography variant="body1">
            Currently, I'm focused on [Your Current Focus/Technologies] and always looking for new challenges 
            and opportunities to grow as a developer.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component="img"
            src={profilePic}
            alt="Cooper Glavin Portrait"
            sx={{
              width: '300px',
              height: '450px',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
              border: '8px solid',
              borderColor: 'background.paper',
              backgroundColor: 'background.paper',
              padding: '4px',
              marginBottom: 2,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          />
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ 
              mt: 2,
              '& a': {
                color: 'text.secondary',
                '&:hover': {
                  color: 'navigation.hover'
                }
              }
            }}
          >
            <Link href="https://github.com/cooperglavin" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ fontSize: 28 }} />
            </Link>
            <Link href="https://www.linkedin.com/in/cooper-glavin-0000000000/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </Link>
            <Link href="https://medium.com/@cooperglavin" target="_blank" rel="noopener noreferrer">
              <ArticleIcon sx={{ fontSize: 28 }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default About; 