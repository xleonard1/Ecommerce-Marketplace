import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import careerImg from '../images/careers.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


const theme = createTheme();


const Careers = () => {
    const {data} = useQuery(QUERY_USER);

    console.log('Data', data)
    let user;
    if(data) {
        user = data.user
    }

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
                    {user ? (
                        
                         
                    <Grid container spacing={1}>
                     
                     
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h2">
                            Welcome Back, {user.username}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={careerImg} alt="careers" />
                            <p>
                            We're glad you're back on the Ecommerce Marketplace today! 
                            </p> 


                            <h3>
                            User Profile 
                            </h3>
                            <p>
                            Insert User Info Here:
                            User Name 
                            User Since (Created Date)
                            More user info from table? 
                            </p>
                            <Box>
                            <Link href="/add-product" color='inherit'>Sell an Item</Link>
                            </Box>

                        </Grid> 
                    </Grid>
                    ) : null }
                </Box>

            </Container>
        </ThemeProvider>

    )
};

export default Careers;