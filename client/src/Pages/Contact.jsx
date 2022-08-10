import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import contactUs from '../images/contact.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export function contactFormSubmit() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      message: data.get('message'),
    });
  };
}

const contact = () => {

return (
<ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Grid container spacing={1}>
              <Grid item xs={12}></Grid>
                <Typography component="h1" variant="h2">
                  Contact Us
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <img src={contactUs} alt="Contact Us" />
              <Grid item xs={12}>
                <p>Our trained support staff are on call 24/7 to assist with any issues you may have.</p>
                <p>Phone: 222-222-2222</p>
                <p>Email: 
                <a href="mailto:customerservice@ecommercemarketplace.com"> customerservice@ecommercemarketplace.com </a></p>
                <p>For shipping questions please visit our <a href="/shipping" target="top"> shipping FAQ page.</a>
                </p>
              </Grid>
              <Grid item xs={12}>
                <h2>Ask Ecommerce Marketplace A Question</h2>
                {/* **ADD onSubmit function ** onSubmit={}  */}
                <Box component="form" 
                noValidate sx={{ mt: 1 }}>
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  />
                  <TextField
                  margin="normal"
                  required
                 fullWidth
                  name="message"
                  label="Message"
                  type="text"
                  id="message"
                  variant="outlined"
                  />
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  >
                  Contact Us
                  </Button>
                </Box>
            </Grid>
          </Grid>
        </Box>
    </Container>
</ThemeProvider>
)
};

export default contact;
