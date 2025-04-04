import { Box, Container, Grid, Typography, TextField, Button, Paper, Divider, Alert, Snackbar } from '@mui/material';
import { Send } from '../utils/icons';
import { useState } from 'react';
import { PageHelmet } from '../components/PageHelmet';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };
  ''
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@mondesa.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
          _subject: `[MonDesa Website] Message from ${formValues.name}`,
          source: 'mondesa-website',
          website_url: window.location.origin,
          _captcha: 'true', // Enable FormSubmit's built-in captcha
          _template: 'box' // Using FormSubmit's nice email template
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        setFormValues({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Error sending message');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "There was a problem sending your message. Please try again or email us directly."
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAlert = () => {
    setSubmitStatus(null);
  };

  return (
    <>
      <PageHelmet routeKey="CONTACT" />
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
              Get in Touch
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4, mx: 'auto', maxWidth: 600 }}>
              Interested in collaboration or want to learn more about MonDesa? Let's connect.
            </Typography>
            <Divider sx={{ width: '80px', mx: 'auto', borderColor: 'primary.main', borderWidth: 2 }} />
          </Box>

          <Grid container spacing={8} alignItems="top">
            <Grid item xs={12} md={5}>
              <Box sx={{ px: { md: 4 } }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Have questions about our technology or interested in potential collaborations? I'd love to hear from you and explore how we can work together towards safer, more resilient communities.
                </Typography>
                <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 600, mr: 1 }}>
                    Email:
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    contact@mondesa.org
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.05)'
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        variant="outlined"
                        required
                        value={formValues.name}
                        onChange={handleChange}
                        InputProps={{
                          sx: { borderRadius: 2 }
                        }}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant="outlined"
                        type="email"
                        required
                        value={formValues.email}
                        onChange={handleChange}
                        InputProps={{
                          sx: { borderRadius: 2 }
                        }}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                        value={formValues.message}
                        onChange={handleChange}
                        InputProps={{
                          sx: { borderRadius: 2 }
                        }}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          py: 1.5,
                          boxShadow: '0 4px 10px rgba(163, 198, 212, 0.4)',
                          borderRadius: 2
                        }}
                        fullWidth
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>

          {/* Success/Error notification */}
          <Snackbar
            open={submitStatus !== null}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              onClose={handleCloseAlert}
              severity={submitStatus?.success ? "success" : "error"}
              variant="filled"
              sx={{ width: '100%' }}
            >
              {submitStatus?.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </>
  );
};

export default Contact;