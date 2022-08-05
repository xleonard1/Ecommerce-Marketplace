import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
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

const returns = () => {
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
                    Return Policy
                    </Typography>
                </Row>
                <Row>
                    <p>
                      Our return policy is simple, if your item is damaged or arrives not in the condition advertised, you will be able to return your item or exchange it for a replacement at no charge to you.  
                    </p> 
                    <p>
                      In the event that what you recieve does not match the item you ordered, reach out to our customer service team and they will provide you with a return authorization (RMA) and send you a postage-paid return shipping label. If a replacement is not desired, you will be refunded the full amount of your purchase once the return is recieved at our return processing center. 
                    </p>
                    <p><a href="mailto:customerservice@ecommercemarketplace.com"> Email Us </a> to inquire about a return</p>

                </Row>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />

            </Container>
        </ThemeProvider>

    )
};

export default returns;