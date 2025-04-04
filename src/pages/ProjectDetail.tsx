import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Typography, Grid, Chip, Paper, Link, Divider } from '@mui/material';
import { ArrowLeft, Github, Globe, FileText, Image, Mountain, Radio } from '../utils/icons';
import { PageHelmet } from '../components/PageHelmet';
import { PROJECTS_PATH } from '../routes';

// Project data
interface ProjectData {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tech: string[];
    color: string;
    features: string[];
    github?: string;
    website?: string;
    relatedArticles?: { title: string; url: string }[];
    image?: string | null;
}

const projectsData: ProjectData[] = [
    {
        id: 'landslide-monitoring',
        title: 'Landslide-Monitoring',
        description: 'Advanced communication unit utilizing LoRa, WiFi, and 4G technologies for comprehensive landslide monitoring in remote areas.',
        fullDescription: `Our Landslide-Monitoring system is designed to provide early warnings for potential landslide events in vulnerable regions. The system deploys a network of sensors that monitor soil moisture, movement, and pressure to detect early signs of land instability.

The communication unit uses multiple protocols to ensure reliable data transmission even in remote areas with limited connectivity. LoRa provides long-range, low-power communication, while 4G and WiFi offer higher bandwidth when available.

The ESP32 microcontroller serves as the brain of the operation, efficiently managing power consumption to extend battery life in the field.`,
        tech: ['LoRa', 'WiFi', '4G', 'ESP32'],
        color: '#A3C6D4',
        features: [
            'Multi-protocol communication for reliable data transmission',
            'Solar-powered for extended field deployment',
            'Real-time alerts via SMS and web dashboard',
            'Low-power sleep modes for battery conservation',
            'Ruggedized enclosure for harsh weather conditions'
        ],
        github: 'https://github.com/MonDesa/landslide-monitoring',
        website: 'https://mondesa.org/projects/landslide-monitoring',
        relatedArticles: [
            {
                title: 'Early Detection Systems for Landslides in Mountainous Regions',
                url: 'https://mondesa.org/blog/landslide-detection-systems'
            },
            {
                title: 'LoRa vs 4G: Choosing the Right Communication Protocol for Remote Monitoring',
                url: 'https://mondesa.org/blog/lora-vs-4g'
            }
        ],
        image: null
    },
    {
        id: 'enemeter',
        title: 'EneMeter',
        description: 'Sophisticated energy monitoring system designed for low-power devices, enabling long-term deployment in the field.',
        fullDescription: `EneMeter is our solution for precise energy consumption monitoring in low-power IoT devices deployed in remote locations. The system provides detailed analytics on power usage patterns, helping to optimize battery life and solar charging cycles.

By continuously monitoring current draw, voltage levels, and charging efficiency, EneMeter can predict battery lifespan and recommend optimizations to extend deployment duration without maintenance visits.

The system integrates with our cloud platform to provide historical data analysis and predictive maintenance scheduling, ensuring that field devices remain operational year-round.`,
        tech: ['ESP32', 'Solar Power', 'Power Management'],
        color: '#B4C9A9',
        features: [
            'Precision current and voltage monitoring',
            'Solar charging optimization algorithms',
            'Cloud-based analytics dashboard',
            'Predictive maintenance alerts'
        ],
        github: 'https://github.com/MonDesa/enemeter',
        relatedArticles: [
            {
                title: 'Maximizing Battery Life in Field-Deployed IoT Devices',
                url: 'https://mondesa.org/blog/battery-optimization'
            }
        ],
        image: '/enemeter.png'
    },
    {
        id: 'sensornodelib',
        title: 'SensorNodeLib',
        description: 'Modular firmware library for ESP32 with advanced wake/sleep logic, optimizing power consumption for IoT devices.',
        fullDescription: `SensorNodeLib is our open-source firmware library that provides a robust foundation for building energy-efficient IoT sensor nodes. The library implements sophisticated wake/sleep management, ensuring devices consume minimal power while still responding promptly to critical events.

The modular architecture allows developers to easily add support for different sensors, communication protocols, and power sources without having to reinvent complex power management logic.

Built on FreeRTOS, the library offers task prioritization, allowing critical alerts to take precedence over routine data collection while maintaining overall system efficiency.`,
        tech: ['C++', 'ESP-IDF', 'FreeRTOS', 'Power Management'],
        color: '#D9BBA0',
        features: [
            'Event-driven wake/sleep scheduling',
            'Modular sensor driver architecture',
            'Pre-built communication protocol handlers',
            'Comprehensive power profiling tools',
            'Over-the-air update support'
        ],
        github: 'https://github.com/MonDesa/sensornodelib',
        website: 'https://sensornodelib.mondesa.org',
        relatedArticles: [
            {
                title: 'Building Energy-Efficient Firmware for Environmental Monitoring',
                url: 'https://mondesa.org/blog/energy-efficient-firmware'
            },
            {
                title: 'FreeRTOS Best Practices for IoT Applications',
                url: 'https://mondesa.org/blog/freertos-practices'
            }
        ]
    },
    {
        id: 'e-noe',
        title: 'e-NOE',
        description: 'Integrated flood-monitoring platform combining wireless sensors, crowdsourced data and ML-driven forecasting.',
        fullDescription: `e-NOE merges three data streams—Wireless Sensor Networks (pressure, turbidity, ultrasonic and camera sensors), Volunteered Geographic Information (social-media mining) and external weather feeds—into a single MQTT-based pipeline.  
The backend layer (Mosquitto + Go service) persists readings, pushes OTA configs and feeds the AGORA-GeoDash dashboard for real-time situational awareness.  
Machine-learning modules (MLP, Random-Forest and chaos-theory time-series models) run in the cloud, issuing early-warning alerts to municipalities.  
The system is ruggedized for harsh environments, supports solar power, low-power sleep modes and fault-tolerant clustering (LEACH).`,
        tech: ['WSN', 'ESP32', 'LoRa', 'MQTT', 'Go', 'Docker'],
        color: '#9FC1E0',
        features: [
            'Hybrid data fusion: sensors + VGI + weather APIs',
            'MQTT broker with Go backend for OTA configs',
            'AGORA-GeoDash real-time geospatial dashboard',
            'Chaos-theory time-series and ML flood forecasts',
            'Fault-tolerant LEACH clustering & energy management',
            'Solar-powered nodes with low-power sleep modes'
        ],
        github: 'https://github.com/MonDesa/e-noe',
        website: 'https://mondesa.org/projects/e-noe',
        relatedArticles: [
            {
                title: 'Wireless Sensor Networks for Urban Flood Monitoring',
                url: 'https://mondesa.org/blog/wsn-flood-monitoring'
            },
            {
                title: 'Multimodal Data Fusion for Disaster Prediction',
                url: 'https://mondesa.org/blog/multimodal-fusion'
            }
        ],
        image: '/enoe.jpg'
    }
];

const ProjectDetail = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find the project from our data
        const foundProject = projectsData.find(p => p.id === projectId);
        setProject(foundProject || null);
        setLoading(false);
    }, [projectId]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
                <Typography variant="h6">Loading project details...</Typography>
            </Box>
        );
    }

    if (!project) {
        return <Navigate to={PROJECTS_PATH} replace />;
    }

    return (
        <>
            <PageHelmet
                title={project.title}
                description={project.description}
            />
            <Box sx={{ py: { xs: 12, md: 16 }, bgcolor: 'background.default' }}>
                <Container maxWidth="lg">
                    {/* Back to projects button */}
                    <Button
                        component={RouterLink}
                        to={PROJECTS_PATH}
                        startIcon={<ArrowLeft />}
                        sx={{ mb: 4 }}
                        color="inherit"
                    >
                        Back to Projects
                    </Button>

                    {/* Project header */}
                    <Box sx={{ mb: 6 }}>
                        <Box
                            sx={{
                                height: 300,
                                bgcolor: `${project.color}15`,
                                borderRadius: 4,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 4,
                                position: 'relative',
                                overflow: 'hidden',
                                backgroundImage: project.image ? `url(${project.image})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {!project.image && <Image size={100} color={project.color} strokeWidth={1} />}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    bgcolor: 'rgba(255,255,255,0.9)',
                                    py: 2,
                                    px: 4,
                                }}
                            >
                                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                                    {project.title}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                            {project.tech.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    sx={{
                                        bgcolor: 'primary.light',
                                        color: 'primary.dark',
                                        fontWeight: 500,
                                    }}
                                />
                            ))}
                        </Box>

                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                            Overview
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', whiteSpace: 'pre-line' }}>
                            {project.fullDescription}
                        </Typography>
                    </Box>

                    <Grid container spacing={6}>
                        {/* Features section */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                                    Key Features
                                </Typography>
                                <Box component="ul" sx={{ pl: 2 }}>
                                    {project.features.map((feature, index) => (
                                        <Box component="li" key={index} sx={{ mb: 2, color: 'text.secondary' }}>
                                            <Typography variant="body1">{feature}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Links section */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 4,
                                    bgcolor: 'background.paper',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
                                    Resources
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {project.github && (
                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                            startIcon={<Github />}
                                            component={Link}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ justifyContent: 'flex-start' }}
                                        >
                                            GitHub Repository
                                        </Button>
                                    )}

                                    {project.website && (
                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                            startIcon={<Globe />}
                                            component={Link}
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{ justifyContent: 'flex-start' }}
                                        >
                                            Project Website
                                        </Button>
                                    )}

                                    {project.relatedArticles && project.relatedArticles.length > 0 && (
                                        <>
                                            <Divider sx={{ my: 2 }} />
                                            <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                                                Related Articles
                                            </Typography>
                                            {project.relatedArticles.map((article, index) => (
                                                <Button
                                                    key={index}
                                                    variant="text"
                                                    color="primary"
                                                    startIcon={<FileText size={16} />}
                                                    component={Link}
                                                    href={article.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
                                                >
                                                    {article.title}
                                                </Button>
                                            ))}
                                        </>
                                    )}
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ProjectDetail;
