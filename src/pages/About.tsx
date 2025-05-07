import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty, always putting people first.',
    icon: 'https://img.icons8.com/color/96/lock--v1.png',
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of recruitment trends using AI tools and data-driven strategies.',
    icon: 'https://img.icons8.com/color/96/artificial-intelligence.png',
  },
  {
    title: 'Partnership',
    description: 'We build long-term relationships based on mutual respect and success.',
    icon: 'https://img.icons8.com/color/96/handshake.png',
  },
];

const About = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9fafd' }}>
      <Container>
        {/* Section: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '800px', color: 'gray', mb: 6 }}>
            We are a specialized IT recruitment firm passionate about connecting high-caliber tech professionals with forward-thinking companies. At our core, we believe that hiring is not just about filling a role — it's about building futures.
          </Typography>
        </motion.div>

        {/* Section: Mission and Vision */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#004D6E' }}>
                  Our Mission
                </Typography>
                <Typography>
                  To bridge the gap between outstanding IT talent and the organizations that need them by leveraging technology, human insight, and a relentless pursuit of excellence.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#004D6E' }}>
                  Our Vision
                </Typography>
                <Typography>
                  To be the most trusted IT recruitment partner globally, known for shaping careers and scaling businesses through talent.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Section: Core Values */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((val, index) => (
              <Grid item xs={12} md={4} key={val.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={5}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 4,
                      background: 'linear-gradient(145deg, #004D6E 20%, #00A3E0 80%)',
                      color: 'white',
                      transform: 'scale(1)',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Avatar
                      src={val.icon}
                      alt={val.title}
                      sx={{ width: 60, height: 60, mb: 2, mx: 'auto' }}
                    />
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {val.title}
                    </Typography>
                    <Typography variant="body2">{val.description}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section: Why Us */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Why Choose Us?
          </Typography>
          <Typography variant="body1" sx={{ color: 'gray', maxWidth: '900px' }}>
            With a strong grasp on the ever-evolving tech industry, we go beyond the resume. We evaluate candidates for culture fit, communication, and future potential — not just their current skills. Our recruitment process is designed to minimize hiring risk, reduce time-to-hire, and maximize satisfaction for both clients and candidates.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
