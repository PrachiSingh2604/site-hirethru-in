import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const values = [
  {
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical practices in every engagement.',
    icon: 'https://img.icons8.com/color/96/lock--v1.png',
  },
  {
    title: 'Excellence',
    description: 'We strive for unmatched quality in every hire, delivering nothing less than the best.',
    icon: 'https://img.icons8.com/color/96/lock--v1.png',
  },
  {
    title: 'Innovation',
    description: 'We embrace technology and fresh thinking to stay ahead in a rapidly evolving talent landscape.',
    icon: 'https://img.icons8.com/color/96/artificial-intelligence.png',
  },
  {
    title: 'Empowerment',
    description: 'We uplift both clients and candidates by aligning the right opportunities with the right people.',
    icon: 'https://img.icons8.com/color/96/artificial-intelligence.png',
  },
  {
    title: 'Partnership',
    description: 'We believe in long-term relationships, working as true partners to scale businesses and shape careers.',
    icon: 'https://img.icons8.com/color/96/handshake.png',
  },
];

const CoreValues = () => {
  return (
    <>
      <Helmet>
        <title>Our Core Values - HireThru Consultancy</title>
        <meta
          name="description"
          content="Explore the core values that define HireThru Consultancy: Integrity, Excellence, Innovation, Empowerment, and Partnership."
        />
      </Helmet>

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
              Our Core Values
            </Typography>
          </motion.div>

          {/* Section: Core Values */}
          <Box sx={{ mb: 10 }}>
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
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default CoreValues;
