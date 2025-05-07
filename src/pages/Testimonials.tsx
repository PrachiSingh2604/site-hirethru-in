import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';

const testimonials = [
  {
    quote:
      '“HireThru helped us close several critical tech positions quickly. Their understanding of the IT landscape is truly commendable.”',
    name: 'Amit Verma',
    position: 'HR Manager, Infosys',
    icon: <PersonIcon sx={{ fontSize: 56, color: '#004D6E' }} />,
  },
  {
    quote:
      '“Reliable, efficient, and responsive — HireThru made the entire hiring process smooth and effective for our team.”',
    name: 'Neha Reddy',
    position: 'Talent Acquisition, Wipro',
    icon: <PersonIcon sx={{ fontSize: 56, color: '#00A3E0' }} />,
  },
  {
    quote:
      '“We saw a significant improvement in the quality of candidates after partnering with HireThru. Highly recommended!”',
    name: 'Rahul Singh',
    position: 'CTO, HCL Technologies',
    icon: <PersonIcon sx={{ fontSize: 56, color: '#004D6E' }} />,
  },
  {
    quote:
      '“What impressed us most was their agility in understanding our needs and delivering skilled professionals faster than expected.”',
    name: 'Priya Mehta',
    position: 'Lead Recruiter, TCS',
    icon: <PersonIcon sx={{ fontSize: 56, color: '#00A3E0' }} />,
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            What Our Clients Say
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Hear from companies that have successfully found their IT talent through HireThru.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #e0f7fa 0%, #f5f5f5 100%)',
                    minHeight: '220px',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      mb: 3,
                      lineHeight: 1.7,
                    }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {testimonial.icon}
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
