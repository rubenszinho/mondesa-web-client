import { Box, Container, Grid, Typography, Paper, Chip, Divider } from '@mui/material';
import { Code, Cpu, Radio, Wifi, Image } from '../utils/icons';
import { PageHelmet } from '../components/PageHelmet';

const skills = [
  { name: 'Embedded IoT', icon: <Cpu size={16} /> },
  { name: 'MQTT', icon: <Radio size={16} /> },
  { name: 'LoRa', icon: <Wifi size={16} /> },
  { name: 'React', icon: <Code size={16} /> },
  { name: 'Go', icon: <Code size={16} /> },
  { name: 'Kubernetes', icon: <Code size={16} /> },
];

const About = () => {
  return (
    <>
      <PageHelmet routeKey="ABOUT" />
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
              About Me
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 800 }}>
              Combining software engineering expertise with a vision for disaster resilience
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    bgcolor: 'rgba(163, 198, 212, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    p: 3,
                  }}
                >
                  <Image size={80} color="#A3C6D4" strokeWidth={1.5} />
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                    Photo of an engineer working on IoT solutions for disaster monitoring
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    opacity: 0.2,
                    zIndex: -1,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    opacity: 0.2,
                    zIndex: -1,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                As a research-driven tech lead, I combine my passion for software engineering with a deep commitment to creating technology that serves humanity. My expertise spans both hardware and software domains, allowing me to develop comprehensive solutions for complex challenges in natural disaster monitoring.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Through MonDesa, I'm working to revolutionize how we approach disaster prevention and monitoring, leveraging cutting-edge IoT technology and robust software architecture to create more resilient communities.
              </Typography>
              <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 4, boxShadow: '0 8px 25px rgba(0,0,0,0.05)' }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                  Technical Expertise
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      label={skill.name}
                      icon={skill.icon}
                      sx={{
                        bgcolor: 'primary.light',
                        color: 'primary.dark',
                        '& .MuiChip-icon': { color: 'primary.dark' },
                        mb: 1,
                        px: 1,
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;