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

const careers = () => {
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
                    Careers
                    </Typography>
                </Row>
                <Row>
                    <p>
                    Ecommerce is a booming business and we are always looking for excellent candidates to join our expanding team of industry professionals. We take pride in being an inclusive workplace with a fun, fast moving culture of positive momentum and employee growth.  Reach out to us if you think you'd be a good fit for our team! We can't wait to hear from you.    
                    </p> 
                </Row>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />

            </Container>
        </ThemeProvider>

    )
};

export default careers;