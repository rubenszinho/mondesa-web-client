import { Box, Container, Grid, Typography, Paper, Chip, Divider, Avatar, Link, Stack } from '@mui/material';
import { Code, Cpu, Radio, Wifi, Image, Github, Linkedin, Mail } from '../utils/icons';
import { PageHelmet } from '../components/PageHelmet';

const skills = [
  { name: 'Embedded IoT', icon: <Cpu size={16} /> },
  { name: 'MQTT', icon: <Radio size={16} /> },
  { name: 'LoRa', icon: <Wifi size={16} /> },
  { name: 'React', icon: <Code size={16} /> },
  { name: 'Go', icon: <Code size={16} /> },
  { name: 'Kubernetes', icon: <Code size={16} /> },
];

const pedroSkills = [
  { name: 'Embedded Systems', icon: <Cpu size={16} /> },
  { name: 'IoT', icon: <Radio size={16} /> },
  { name: 'ML', icon: <Code size={16} /> },
  { name: 'Sensor Networks', icon: <Wifi size={16} /> },
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
              About Our Team
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 800 }}>
              Combining expertise in software engineering and IoT with a shared vision for disaster resilience
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          {/* Samuel Rubens - Team Lead */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 8,
              borderRadius: 4,
              bgcolor: 'background.paper',
              boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar
                    src="/rubenszinho.png"
                    alt="Samuel Rubens"
                    sx={{
                      width: 200,
                      height: 200,
                      mb: 2,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>Samuel Rubens</Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 3 }}>Founder & Lead Engineer</Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Link href="https://github.com/rubenszinho" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/samuelrubens/" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </Link>
                    <Link href="mailto:contact@rubenszinho.dev">
                      <Mail size={20} />
                    </Link>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Professional with experience in software development, infrastructure automation, and distributed systems. Specialist in microservices architecture, Kubernetes, and DevOps, with expertise in Go, TypeScript, Terraform, and cloud platforms.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Through MonDesa, I'm working to revolutionize how we approach disaster prevention and monitoring, leveraging cutting-edge IoT technology and robust software architecture to create more resilient communities.
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
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
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Pedro Teodoro - Team Member */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: 'background.paper',
              boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 200,
                      height: 200,
                      borderRadius: '50%',
                      mb: 2,
                      bgcolor: 'rgba(163, 198, 212, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image size={80} color="#9FC1E0" strokeWidth={1.5} />
                  </Box>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>Pedro Teodoro</Typography>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 3 }}>IoT & AI Engineer</Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Link href="https://github.com/npteodoro/" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </Link>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  As a student passionate about the intersection of IoT and AI, I'm driven by curiosity and a desire to build intelligent systems that solve real-world challenges.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  My focus lies in exploring how connected devices, when combined with machine learning, can lead to smarter, more responsive solutions—whether in environmental monitoring, smart cities, or predictive maintenance. I'm currently diving deep into embedded systems, sensor networks, and AI models, building hands-on projects that bring these technologies together. My goal is to contribute to innovations that make our world more efficient, adaptive, and resilient.
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                    Technical Focus
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {pedroSkills.map((skill) => (
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
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default About;