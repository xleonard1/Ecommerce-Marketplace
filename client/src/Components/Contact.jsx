import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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

        <Row>
            <Typography component="h1" variant="h5">
            Contact Us
            </Typography>
        </Row>
        <Row>
            <Col xs={12} md={6}>

                <p>Our trained support staff are on call 24/7 to assist with any issues you may have.</p>
                <p>Phone: 404-123-4567</p>
                <p>Email: 
                <a href="mailto:customerservice@ecommercemarketplace.com"> customerservice@ecommercemarketplace.com </a></p>
                <h3>Shipping Questions:</h3>
                <p>
                Visit our shipping FAQ page <a href="/shipping" target="top">here</a>
                </p>
            </Col>

            <Col xs={12} md={6}>
                <h2>Ask Ecommerce Marketplace A Question</h2>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            </Col>
        </Row>
        </Box>

    </Container>
</ThemeProvider>
)
};

export default contact;
