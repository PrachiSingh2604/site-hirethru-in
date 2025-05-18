import { Box, Container, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';

const roles = [
  {
    title: 'Frontend Developer',
    stack: 'React, TypeScript, HTML, CSS, Redux',
    demand: 'High',
    growth: '22%',
  },
  {
    title: 'Backend Developer',
    stack: 'Node.js, Express, MongoDB, SQL, REST APIs',
    demand: 'Very High',
    growth: '25%',
  },
  {
    title: 'DevOps Engineer',
    stack: 'AWS, Docker, Kubernetes, Jenkins, Terraform',
    demand: 'High',
    growth: '30%',
  },
  {
    title: 'Data Scientist',
    stack: 'Python, Pandas, TensorFlow, SQL, PowerBI',
    demand: 'High',
    growth: '35%',
  },
  {
    title: 'Full Stack Developer',
    stack: 'React, Node.js, MongoDB, GraphQL, TypeScript',
    demand: 'Very High',
    growth: '28%',
  },
];

const analytics = [
  { label: 'Role Coverage', value: '20+ IT Profiles' },
  { label: 'Tech Stack Expertise', value: '100+ Tools & Technologies' },
  { label: 'Industry Demand Match Rate', value: '95%' },
];

const Roles = () => {
  return (
    <Box>
      <Helmet>
        <title>In-Demand Tech Roles | HireThru Consultancy</title>
        <meta name="description" content="Explore high-demand IT roles, required tech stacks, and industry growth. Stay ahead with HireThru Consultancy." />
      </Helmet>

      <Box
        sx={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <Typography
            variant="h2"
            color="white"
            gutterBottom
            component={motion.h2}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Explore In-Demand Tech Roles
          </Typography>
          <Typography
            variant="h6"
            color="white"
            component={motion.p}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Gain insight into the most sought-after IT roles and their required technologies. Stay ahead with the right talent.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom>
          Role Overview
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#004D6E' }}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Role</TableCell>
                <TableCell sx={{ color: 'white' }}>Tech Stack</TableCell>
                <TableCell sx={{ color: 'white' }}>Industry Demand</TableCell>
                <TableCell sx={{ color: 'white' }}>Growth Rate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roles.map((role, index) => (
                <TableRow key={index}>
                  <TableCell>{role.title}</TableCell>
                  <TableCell>{role.stack}</TableCell>
                  <TableCell>{role.demand}</TableCell>
                  <TableCell>{role.growth}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Container sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {analytics.map((item, index) => (
            <Grid item xs={12} md={4} key={item.label}>
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
                    {item.value}
                  </Typography>
                  <Typography variant="h6">{item.label}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Roles;
