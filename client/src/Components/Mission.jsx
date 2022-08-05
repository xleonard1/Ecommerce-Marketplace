import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const mission = () => {
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
                            Our Mission
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <p>
                          Our mission is to create the best online marketplace, where shoppers and sellers are able to purchase truly world class, hard to find products from our network of reputable sellers.  Customer satisfaction is 100% guaranteed, so you can rest assured that if any issues arise during your shopping experience on Ecommerce Marketplace that it will be taken care of.  
                        </p> 
                        </Grid>
                      </Grid>
                </Box>

            </Container>
        </ThemeProvider>

    )
};

export default mission;