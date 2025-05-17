import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Footer from './Footer';

const features = [
  {
    title: 'Industry Expertise',
    description:
      'We are a recruitment firm specializing in IT recruitment, dedicated to connecting top tech talent with leading organizations.',
  },
  {
    title: 'Customized Hiring Approach',
    description:
      'No two organizations are the same. We tailor our recruitment strategy to your specific culture, timelines, and technical requirements for optimal results.',
  },
  {
    title: 'Human + AI Advantage',
    description:
      'We combine the intuition of experienced recruiters with the power of AI-based screening tools to accelerate and refine our talent matches.',
  },
  {
    title: 'Vetted Talent Pipeline',
    description:
      'Our network consists of pre-screened, high-performing professionals ready to make an impact from day one — whether full-time, contract, or remote.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
      <Container>
        {/* Section: Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Why Choose Us?
          </Typography>
          <Typography variant="h6" sx={{ color: 'gray', maxWidth: '800px', mb: 6 }}>
            More than just a hiring partner — we’re your strategic ally in building high-performing tech teams. Here's what sets us apart from the crowd.
          </Typography>
        </motion.div>

        {/* Section: Features */}
        <Stack spacing={6}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 4,
                  borderLeft: index % 2 === 0 ? '5px solid #00A3E0' : 'none',
                  borderRight: index % 2 !== 0 ? '5px solid #004D6E' : 'none',
                  background: index % 2 === 0 ? '#f0faff' : '#eef7fb',
                  borderRadius: '12px',
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1">{feature.description}</Typography>
              </Box>
            </motion.div>
          ))}
        </Stack>

        {/* Section: Final Image & Statement */}
        <Box sx={{ mt: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
              We’re not just filling positions — we’re building futures.
            </Typography>
            <Box
              component="img"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Growth and progress"
              sx={{
                width: '100%',
                maxWidth: '900px',
                display: 'block',
                mx: 'auto',
                borderRadius: 6,
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            />
          </motion.div>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default WhyChooseUs;
