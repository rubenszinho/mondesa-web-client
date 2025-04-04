import { Box, Container, Grid, Typography, Divider, IconButton, Link } from '@mui/material';
import { Github } from '../utils/icons';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#f0f3f1', py: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <Box component="img" src="/logo.svg" alt="MonDesa Logo" sx={{ height: 40, mb: 2 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Smart monitoring for a safer tomorrow. Innovative IoT solutions for natural disaster prevention.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Contact</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            Email: contact@mondesa.org
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Social Media</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                component={Link}
                                href="https://github.com/MonDesa"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                sx={{
                                    bgcolor: 'rgba(163, 198, 212, 0.1)',
                                    '&:hover': { bgcolor: 'rgba(163, 198, 212, 0.2)' }
                                }}
                            >
                                <Github size={24} color="#444B54" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 4 }} />
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} MonDesa. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
