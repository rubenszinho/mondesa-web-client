import { Box, Container, Grid, Typography, Card, CardContent, Chip, Button, Divider } from '@mui/material';
import { ArrowRight, Code, Mountain, Radio, Image } from '../utils/icons';
import { Link } from 'react-router-dom';
import { PageHelmet } from '../components/PageHelmet';
import { getProjectDetailPath } from '../routes';

const projects = [
  {
    id: 'landslide-monitoring',
    title: 'Landslide-Monitoring',
    description: 'Advanced communication unit utilizing LoRa, WiFi, and 4G technologies for comprehensive landslide monitoring in remote areas.',
    icon: <Mountain size={20} />,
    tech: ['LoRa', 'WiFi', '4G', 'ESP32'],
    color: '#A3C6D4',
  },
  {
    id: 'enemeter',
    title: 'EneMeter',
    description: 'Sophisticated energy monitoring system designed for low-power devices, enabling long-term deployment in the field.',
    icon: <Radio size={20} />,
    tech: ['ESP32', 'Solar Power'],
    color: '#B4C9A9',
  },
  {
    id: 'sensornodelib',
    title: 'SensorNodeLib',
    description: 'Modular firmware library for ESP32 with advanced wake/sleep logic, optimizing power consumption for IoT devices.',
    icon: <Code size={20} />,
    tech: ['C++', 'ESP-IDF', 'FreeRTOS'],
    color: '#D9BBA0',
  },
];

const Projects = () => {
  return (
    <>
      <PageHelmet routeKey="PROJECTS" />
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #A3C6D4, #B4C9A9)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Projects & Research
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 800 }}>
              Exploring innovative solutions in IoT and disaster monitoring through practical applications and research.
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        height: 200,
                        bgcolor: `${project.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Image size={48} color={project.color} strokeWidth={1.5} />
                      <Typography variant="caption" sx={{ mt: 1, color: 'text.secondary' }}>
                        {project.title} illustration
                      </Typography>
                    </Box>
                    <Box sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      bgcolor: 'rgba(255,255,255,0.8)',
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.5,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {project.icon}
                      <Typography variant="subtitle2" sx={{ ml: 0.5 }}>
                        {project.title}
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'primary.light',
                            color: 'primary.dark'
                          }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<ArrowRight size={16} />}
                      component={Link}
                      to={getProjectDetailPath(project.id)}
                      sx={{ p: 0, minWidth: 'auto' }}
                    >
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Projects;