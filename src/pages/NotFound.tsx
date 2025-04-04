import { Box, Button, Container, Typography } from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHelmet } from '../components/PageHelmet';
import { HOME_PATH } from '../routes';

const NotFound = () => {
    return (
        <>
            <PageHelmet
                title="Page Not Found"
                description="The page you are looking for doesn't exist or has been moved."
            />
            <Box
                sx={{
                    py: { xs: 12, md: 16 },
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: 'background.default',
                }}
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '6rem', sm: '10rem' },
                                fontWeight: 700,
                                mb: 2,
                                background: 'linear-gradient(45deg, #A3C6D4, #B4C9A9)',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            404
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                mb: 4,
                                fontWeight: 500,
                            }}
                        >
                            Page Not Found
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </Typography>
                        <Button
                            component={Link}
                            to={HOME_PATH}
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<ArrowLeft />}
                        >
                            Back to Home
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default NotFound;
