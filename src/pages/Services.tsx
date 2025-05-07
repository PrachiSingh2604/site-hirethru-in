import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Business,
  People,
  Work,
  Assessment,
  Search,
  CheckCircle,
  Star,
  Group,
  Lock,
  TrendingUp,
} from '@mui/icons-material';
import React from 'react';
import type { ReactElement } from 'react';

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  delay?: number;
}

const clientServices: Service[] = [
  { icon: <Business fontSize="large" />, title: 'End-to-End Recruitment', description: 'From understanding your needs to onboarding the perfect hire.' },
  { icon: <Assessment fontSize="large" />, title: 'Technical Screening & Assessment', description: 'In-depth evaluations by experts to ensure skill match.' },
  { icon: <Work fontSize="large" />, title: 'Contractual & Permanent Staffing', description: 'Flexible hiring models tailored to your business needs.' },
  { icon: <Search fontSize="large" />, title: 'Talent Mapping & Market Insights', description: 'Data-driven strategies for smarter hiring decisions.' },
  { icon: <Star fontSize="large" />, title: 'Employer Branding Support', description: 'Attract top talent by building a standout employer image.' },
  { icon: <Group fontSize="large" />, title: 'Dedicated Account Management', description: 'Personalized service for seamless coordination.' },
];

const candidateServices: Service[] = [
  { icon: <People fontSize="large" />, title: 'Personalized Job Matching', description: 'We connect you to roles based on your skills & goals.' },
  { icon: <Assessment fontSize="large" />, title: 'Resume & Profile Optimization', description: 'Make your application shine to potential employers.' },
  { icon: <CheckCircle fontSize="large" />, title: 'Interview Preparation', description: 'Boost confidence with targeted interview guidance.' },
  { icon: <Business fontSize="large" />, title: 'Access to Top Companies', description: 'Opportunities at reputed organizations, big and small.' },
  { icon: <Lock fontSize="large" />, title: 'Confidential & Free Services', description: 'We never charge candidates – your trust matters.' },
  { icon: <TrendingUp fontSize="large" />, title: 'Career Growth Advisory', description: 'Navigate your journey with expert career support.' },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <Paper
      elevation={6}
      sx={{
        p: 4,
        textAlign: 'center',
        background: 'linear-gradient(145deg, #004D6E 20%, #00A3E0 80%)',
        color: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box mb={2}>{icon}</Box>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Paper>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f4f9fb' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          💼 Services for Clients
        </Typography>
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {clientServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <ServiceCard {...service} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom>
          👨‍💻 Services for Candidates
        </Typography>
        <Grid container spacing={4}>
          {candidateServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={service.title}>
              <ServiceCard {...service} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
