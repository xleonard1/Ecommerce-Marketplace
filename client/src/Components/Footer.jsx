import * as React from "react";
import { Container, Grid, Box, Link } from "@mui/material";
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import pinterest from '../images/pinterest.png';


const Footer = () => {
  return (
    <footer>
      <Box bgcolor='black' px={{ xs: 3, sm: 5}} py={{ xs: 5, sm: 5}} color='white'>
        <Container >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Customer Service</Box>
              <Box>
                <Link href="/contact" color='inherit'>Contact Us</Link>
              </Box>
              <Box>
                <Link href="/sell-with-us" color='inherit'>Sell With Us</Link>
              </Box>
              <Box>
                <Link href="/shipping" color='inherit'>Shipping Policy</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/dashboard" color='inherit'>My Account</Link>
              </Box>
              <Box>
                <Link href="/login" color='inherit'>Login</Link>
              </Box>
              <Box>
                <Link href="/login" color='inherit'>Register</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Company</Box>
              <Box>
                <Link href="/mission" color='inherit'>Our Mission</Link>
              </Box>
              <Box>
                <Link href="/returns" color='inherit'>Return Policy</Link>
              </Box>
              <Box>
                <Link href="/careers" color='inherit'>Careers</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign='center' pt={{xs: 2, sm: 2}} pb={{ xs: 2, s: 0}}>
            E-Commerce Site &reg; {new Date().getFullYear()}
          </Box>
          <Box textAlign='center' display={'flex'} justifyContent={'space-evenly'} pt={{xs: 2, sm: 2}} pb={{ xs: 2, s: 0}}>
            <img src={fb} alt="facebook" />
            <img src={insta} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
