import { Box, Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const projects: ProjectProps[] = [
  {
    title: "Project 1",
    description: "Description of your first project. What it does, why you built it, and what you learned.",
    imageUrl: "/placeholder.jpg", // Add your image path
    technologies: ["React", "TypeScript", "Material-UI"],
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <Box
      id="portfolio"
      component="section"
      sx={{
        minHeight: '100vh',
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
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Technologies: {project.technologies.join(', ')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio; 