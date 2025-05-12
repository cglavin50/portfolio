import { Box, Typography, Link, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
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
            Hello! I'm Cooper, a junior Web Developer with a passion for security.
            Synthesizing my experience in Network Security research and Cybersecurity companies, I enjoy building scalable, secure web solutions.
            I have professional experience across multiple tech stacks, and am currently focusing on fullstack development with .NET Core and Blazor.
            See my resume <Link href={`${import.meta.env.BASE_URL}/Coopers_Resume.pdf`} target="_blank" rel="noopener noreferrer">here</Link>.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            I have a personal passion for digital privacy, and believe that the proper tooling needs to become more accessible to the general public.
            When I'm not at work, I'm typically found tinkering with my raspberry pi homelab.
          </Typography>
          <Typography variant="body1">
            Currently I'm a Fullstack Dev at <Link href="https://www.easydynamics.com/" target="_blank" rel="noopener noreferrer">Easy Dynamics</Link>,
            and always looking for new challenges and opportunities to grow as a developer - specifically looking to get hands on experience with Cybersecurity and Devops.
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
            <Link href="https://github.com/cglavin50" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ fontSize: 28 }} />
            </Link>
            <Link href="https://www.linkedin.com/in/cooper-glavin-5852351aa/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ fontSize: 28 }} />
            </Link>
            <Link href="https://medium.com/@ceg126" target="_blank" rel="noopener noreferrer">
              <ArticleIcon sx={{ fontSize: 28 }} />
            </Link>
            <Link href={`${import.meta.env.BASE_URL}/Coopers_Resume.pdf`} target="_blank" rel="noopener noreferrer">
              <DescriptionIcon sx={{ fontSize: 28 }} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default About; 
