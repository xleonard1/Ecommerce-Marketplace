import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import returnImg from '../images/returns.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography     component="h1" variant="h2">
                      Return Policy
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <img src={returnImg} alt="Returns" />
                      <p>
                      Our return policy is simple, if your item is damaged or arrives not in the condition advertised, you will be able to return your item or exchange it for a replacement at no charge to you.  
                      </p> 
                      <p>
                      In the event that what you recieve does not match the item you ordered, reach out to our customer service team and they will provide you with a return authorization (RMA) and send you a postage-paid return shipping label. If a replacement is not desired, you will be refunded the full amount of your purchase once the return is recieved at our return processing center. 
                      </p>
                      <p><a href="mailto:customerservice@ecommercemarketplace.com"> Email Us </a> to inquire about a return</p>

                    </Grid>
                  </Grid>
                </Box>
            </Container>
        </ThemeProvider>

    )
};

export default returns;