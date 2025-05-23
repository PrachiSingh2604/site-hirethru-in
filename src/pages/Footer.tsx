import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import { Helmet } from 'react-helmet';

const Footer = () => {
    return (
        <>
            <Helmet>
                <title>HireThru</title>
                <meta
                    name="description"
                    content="Get in touch with HireThru Consultancy. Contact us via phone or email, or visit our head office in Gurugram, Haryana. Find our location on the map."
                />
            </Helmet>

            <Box sx={{ bgcolor: '#0D1B2A', color: 'white', py: 6, mt: 8 }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                Contact Information
                            </Typography>
                            {/* <Typography>Phone: +91 8860509145, 9819616197</Typography> */}
                            <Typography>Email: Enquiry@hirethru.in</Typography>
                            <Typography>
                                Website:{" "}
                                <a
                                    href="http://site.hirethru.in/"
                                    style={{ color: '#00A3E0' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    site.hirethru.in
                                </a>
                            </Typography>
                            <Typography>Head Office: Gurugram, Haryana</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <iframe
                                src="https://maps.google.com/maps?q=Gurgaon%2C%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />
                    <Typography variant="body2" align="center" sx={{ color: 'gray' }}>
                        © 2024 HireThru Consultancy. All rights reserved.
                    </Typography>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
