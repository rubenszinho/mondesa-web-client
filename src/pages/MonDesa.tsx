import { Box, Container, Grid, Typography, Card, CardContent, Divider, Paper } from '@mui/material';
import { Mountain, Radio, Wifi, Zap, Users } from '../utils/icons';
import { PageHelmet } from '../components/PageHelmet';

const features = [
  {
    icon: <Zap size={32} color="#A3C6D4" />,
    title: 'Energy-Efficient Firmware',
    description: 'Advanced power management systems ensuring long-term deployment capability in remote locations.',
  },
  {
    icon: <Radio size={32} color="#B4C9A9" />,
    title: 'MQTT Topic System',
    description: 'Robust message queuing system for reliable data transmission and real-time monitoring.',
  },
  {
    icon: <Wifi size={32} color="#D9BBA0" />,
    title: 'Wireless Communication',
    description: 'Multi-protocol support including LoRa, WiFi, and 4G for comprehensive coverage.',
  },
  {
    icon: <Mountain size={32} color="#A3C6D4" />,
    title: 'Disaster Prevention',
    description: 'Early warning systems powered by real-time data analysis and machine learning.',
  },
];

const MonDesa = () => {
  return (
    <>
      <PageHelmet routeKey="MONDESA" />
      <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Box component="img" src="/extended_logo.svg" alt="MonDesa Logo" sx={{
              height: 80,
              mb: 4,
              display: 'inline-block'
            }} />
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #A3C6D4, #B4C9A9)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              About MonDesa
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 800 }}>
              Pioneering the future of natural disaster monitoring through innovative IoT solutions and real-time data analysis.
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <Box sx={{ p: 4 }}>
                    <Box sx={{
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      bgcolor: 'background.default',
                      mx: 'auto'
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 500, textAlign: 'center' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center">
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 12 }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={8}>
                <Typography variant="h3" sx={{ mb: 4 }}>Our Mission</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 800, mb: 4 }}>
                  MonDesa is dedicated to developing cutting-edge technology for natural disaster monitoring and prevention. By combining IoT expertise with advanced data analysis, we create systems that help communities prepare for and respond to environmental challenges. Our focus on energy efficiency and reliable communication ensures our solutions work where they're needed most.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 800 }}>
                  Our team brings together specialists in software engineering, embedded systems, and machine learning to build integrated solutions that address the complex challenges of disaster monitoring and prevention.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                  }}>
                    <Users size={24} color="#9FC1E0" />
                    <Typography variant="h5" sx={{ ml: 2, fontWeight: 500 }}>
                      Our Team
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                    MonDesa brings together experts in:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0, color: 'text.secondary' }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body2">Software Architecture & DevOps</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body2">Embedded Systems & IoT</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body2">Machine Learning & Data Analysis</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 0 }}>
                      <Typography variant="body2">Disaster Prevention Solutions</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MonDesa;