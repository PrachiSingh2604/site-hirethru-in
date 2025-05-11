import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'IT Roles', path: '/roles' },
    { text: 'How It Works', path: '/how-it-works' },
    { text: 'Our Services', path: '/services' },
    { text: 'Why Choose Us', path: '/why-choose-us' },
    // { text: 'Testimonials', path: '/testimonials' },
    { text: 'Core Values', path: '/core-values' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Link to="/">
    <Box
      component="img"
      src={`${import.meta.env.BASE_URL}logo.png`}
      sx={{ height: 110, width: 'auto' }}
      alt="Logo"
    />
  </Link>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {menuItems.map((item) => (
            <motion.div
              key={item.text}
              whileHover={{ scale: 1.1 }}
              style={{ display: 'inline-block' }}
            >
              <Link
                to={item.path}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.text.primary,
                  margin: '0 15px',
                }}
              >
                {item.text}
              </Link>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;