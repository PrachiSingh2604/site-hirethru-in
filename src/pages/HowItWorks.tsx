import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

interface Step {
  title: string;
  description: string;
  image: string;
}

interface StepCardProps {
  step: Step;
  index: number;
}

const steps: Step[] = [
  {
    title: 'Recruitment Analysis',
    description:
      'We begin by thoroughly understanding your technical requirements, company culture, and the specific skills needed for the role.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
  },
  {
    title: 'Candidate Sourcing',
    description:
      'We leverage our extensive network, advanced technology, and industry expertise to identify qualified candidates.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
  },
  {
    title: 'Technical Assessment',
    description:
      'Our technical specialists rigorously evaluate candidates’ skills and experience to ensure they meet the role’s requirements.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  },
  {
    title: 'Presentation and Selection',
    description:
      'We present a curated shortlist and assist in interview coordination to ensure the best hiring decision.',
    image: 'https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg',
  },
];

const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Grid
        container
        spacing={4}
        direction={isEven ? 'row' : 'row-reverse'}
        alignItems="center"
        sx={{ mb: 12 }}
      >
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              background: 'linear-gradient(145deg, #004D6E 20%, #00A3E0 80%)',
              color: 'white',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transform: 'perspective(1000px)',
              '&:hover': {
                transform: 'scale(1.03) perspective(1000px) rotateX(1deg) rotateY(1deg)',
              },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Box
                sx={{
                  backgroundColor: 'white',
                  color: '#004D6E',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  width: 50,
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                }}
              >
                {index + 1}
              </Box>
              <Typography variant="h5" component="h2">
                {step.title}
              </Typography>
            </Stack>
            <Typography variant="body1">{step.description}</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={step.image}
            alt={step.title}
            sx={{
              width: '100%',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              transform: 'scale(1)',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Grid>
      </Grid>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f0f8fb' }}>
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          How It Works
        </Typography>
        <Typography variant="h6" sx={{ mb: 8, color: 'gray' }}>
          Our Proven Recruitment Process: A structured approach to find the perfect match between talented IT professionals and organizational needs.
        </Typography>

        {steps.map((step, index) => (
          <StepCard step={step} index={index} key={index} />
        ))}
      </Container>
    </Box>
  );
};

export default HowItWorks;
