import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyChooseUs from './pages/WhyChooseUs';
import HowItWorks from './pages/HowItWorks';
import Testimonials from './pages/Testimonials';
import Roles from './pages/Roles';
import Contact from './pages/Contact';
import {Box} from '@mui/material';
import CoreValues from './pages/CoreValues';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004D6E',
    },
    secondary: {
      main: '#00A3E0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Box sx={{ overflowX: 'hidden' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}



export default App;