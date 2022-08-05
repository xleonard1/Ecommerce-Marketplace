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


const theme = createTheme();

const shipping = () => {
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
                        Shipping Policy
                        </Typography>
                        <img src="/images/truck.PNG"></img>
                    </Row>
                    <Row>
                        <img src="/images/fedexLogo.PNG"></img><img src="/images/uspsLogo.PNG"></img>
                    </Row>
                    <Row>
                        <p> All items ship with USPS Priority Mail or FedEx 2-day air to ensure delivery to your location within 2 business days. Shipping costs are included in prices so there are no surprises! You will recieve a confirmation email with your shipping tracking information as soon as your item ships.</p> 
                    </Row>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default shipping;