import { useState, useRef } from 'react';
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

  // Manual validation
  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_sqddlkm',   // 🔁 Replace with your EmailJS service ID
        'template_53fnmu3',  // 🔁 Replace with your EmailJS template ID
        formRef.current,
        '7ruewttHrSezbdGnK'    // 🔁 Replace with your EmailJS public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - HireThru Consultancy</title>
        <meta
          name="description"
          content="Get in touch with HireThru Consultancy for expert recruitment services in the IT and technology sector."
        />
      </Helmet>

      <Container sx={{ my: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h2" gutterBottom>
                Get in Touch
              </Typography>
              <Box
                component="form"
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
              >
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  margin="normal"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  margin="normal"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  margin="normal"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                  Contact Information
                </Typography>
                <Typography paragraph>
                  Phone: +91 8860509145, 9819616197
                </Typography>
                <Typography paragraph>
                  Email: client.connect@hirethru.in, Enquiry@hirethru.in
                </Typography>
                <Typography paragraph>
                  Website: http://site.hirethru.in/
                </Typography>
                <Typography paragraph>
                  Head Office: Gurugram, Haryana
                </Typography>
              </Paper>

              <Box sx={{ mt: 4, height: '400px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Gurgaon%2C%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
