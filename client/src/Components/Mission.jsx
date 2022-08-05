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
                  
                <Row>
                    <Typography component="h1" variant="h5">
                    Our Mission
                    </Typography>
                </Row>
                <Row>
                    <p>
                      Our mission is to create the best online marketplace, where shoppers and sellers are able to purchase truly world class, hard to find products from our network of reputable sellers.  Customer satisfaction is 100% guaranteed, so you can rest assured that if any issues arise during your shopping experience on Ecommerce Marketplace that it will be taken care of.  
                    </p> 
                </Row>
                </Box>

            </Container>
        </ThemeProvider>

    )
};

export default mission;