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

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const theme = createTheme();


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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
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
                <h3>Shipping Questions:<h3>
                <p>
                Visit our shipping FAQ page <a href="/shipping" target="top">here</a>
                </p>
            </Col>

            <Col xs={12} md={6}>
                <h2>Ask Ecommerce Marketplace A Question</h2>
                    <Form>
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="email" required isInvalid/>
                            <Form.Control.Feedback type="invalid">
                            Please enter a valid email address.
                            </Form.Control.Feedback>
                        </InputGroup>

                        <Form.Group className="mb-3" controlId="formContactBody">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="Please enter your message here" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="right">
                        Submit
                        </Button>
                    </Form>
            </Col>
        </Row>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
</ThemeProvider>
)
};

export default contact;


)
};

export default contact;