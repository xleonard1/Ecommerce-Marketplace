import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import fedex from '../images/fedexLogo.png';
import usps from '../images/uspsLogo.png';
import truck from '../images/truck.png';
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
                  }}
                >
                  <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h2">
                                Shipping Policy
                            </Typography>
                            <img src={truck} alt="Delivery Van" />
                        </Grid>
                        <Grid item xs={12}>
                            <img src={fedex} alt="FedEx Logo" />
                          <img src={usps} alt="USPS Logo" />
                        </Grid>
                        <Grid item xs={12}>
                            <p> All items ship with USPS Priority Mail or FedEx 2-day air to ensure delivery to your location within 2 business days. Shipping costs are included in prices so there are no surprises! You will recieve a confirmation email with your shipping tracking information as soon as your item ships.</p> 
                        </Grid>  
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default shipping;