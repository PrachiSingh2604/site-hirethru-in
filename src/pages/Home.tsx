import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
  { label: 'CV Turnaround', value: '48 hours' },
  { label: 'Offer To Join Ratio', value: '90%' },
  { label: 'First Year Retention', value: '85%' },
];

const Home = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <Typography
            variant="h2"
            color="white"
            gutterBottom
            component={motion.h1}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Connecting Talent with Leading Organizations
          </Typography>
          <Typography
            variant="h5"
            color="white"
            component={motion.h5}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We are a progressive and trusted recruitment firm specialized in connecting exceptional talent with forward-thinking companies and building lasting partnerships.
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={stat.label}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(45deg, #004D6E 30%, #00A3E0 90%)',
                    color: 'white',
                  }}
                >
                  <Typography variant="h3" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6">{stat.label}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Video Section */}
      <Container sx={{ my: 8 }}>
        <video
          width="100%"
          controls
          style={{ display: 'block' }}
        >
          <source src={`${import.meta.env.BASE_URL}intro.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    </Box>
  );
};

export default Home;
