import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import careerImg from '../images/careers.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
                    
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h2">
                            Become A Seller
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={careerImg} alt="careers" />
                            <p>
                            Becoming a seller is simple! Simply create an account with us and you will be able to buy AND sell items right away!    
                            </p> 
                            <p>
                            From your account dashboard click on the "Sell A Product" button or navigate to the /add-product page.    
                            </p> 
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </ThemeProvider>

    )
};

export default careers;