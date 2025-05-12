import { Box, Typography, Link, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import homelabImg from '../assets/portfolio-imgs/homelab-dashboard.png'

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  technologies: string[];
}

const projects: ProjectProps[] = [
  {
    title: "Raspberry Pi Homelab",
    description: "I manage a lightweight homelab using a Raspberry Pi. Configuration and automated deployments are managed with ansible and github actions runners, with all services running through docker compose stacks. Services are reverse-proxied through Caddy for centralized HTTPS and logging, with Adguard Home providing ad-blocking and DNS rewrites to local-only services. Monitoring is managed with Prometheus + Grafana, with AlertManager discord hooks for alerts.",
    imageUrl: homelabImg, // Add your image path
    technologies: ["Ansible", "Docker", "Promteheus + Grafana", "Bash", "Make"],
    url: "https://github.com/cglavin50/homelab",
  },
  // {
  //   title: "SureSwitch IoT Generator Tool",
  //   description: "Responsible for building out the ESP32 code for IoT product. Handles access-mode boot for easy input of residential wifi connection over HTTPS, runs test via commands sent from mobile app, and reports monitoring data and test results to mobile + web app.",
  //   imageUrl: "",
  //   technologies: ["C", "Azure", ".NET", "Esp32", "MQTT"],
  //   url: "",
  // },
];

const Portfolio = () => {
  return (
    <Box
      id="portfolio"
      component="section"
      sx={{
        minHeight: '',
        paddingTop: '12rem',
        paddingBottom: '4rem',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ marginBottom: '2rem' }}>
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                {project.imageUrl != "" ?
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.imageUrl}
                    alt={project.title}
                  /> : <br />
                }
                <CardContent>
                  <Link href={project.url}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Typography fontWeight={'bold'}>Technologies:</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.technologies.join(', ')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box >
  );
};

export default Portfolio; 
