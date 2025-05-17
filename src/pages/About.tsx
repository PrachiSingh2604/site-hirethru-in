import { Box, Container, Typography, Grid, Paper} from '@mui/material';
import { motion } from 'framer-motion';
import Footer from './Footer';


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
          We are a progressive and trusted recruitment firm specializing in the IT/technology sector, dedicated to connecting outstanding tech professionals with innovative, forward-thinking companies. For us, recruitment is more than just filling positions — it’s about empowering talent and building lasting partnerships for the future.
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
                Our mission is to bridge the gap between exceptional talent — across both IT and non-IT domains — and the organizations that need them, by leveraging advanced technology, human insight, and an unwavering commitment to excellence.
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
                To become a global catalyst for growth by transforming how organizations discover talent and how individuals discover purpose — using advanced analytics to ensure every hire drives impact, innovation, and long-term success.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>


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
      <Footer />
    </Box>
  );
};

export default About;
