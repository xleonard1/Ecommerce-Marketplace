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


const product = () => {
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
            ${product.title} Mod Style Desk Lamp
          </Typography>
        </Row>
        <Row>
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2022/8/3/1/rx_joss-and-main_taupe-antique-brass-desk-lamp.jpeg.rend.hgtvcom.616.616.suffix/1659535798242.jpeg"   "${product.imageUrl}">
        </Row>
        <Row>
            <p> This stylish lamp provides a nice warm glow to your workspace while looking great too. Lorem Ipsum Dolorem etc etc... ${product.description}</p>
        </Row>
        <Row>
            <h3> Category: ${product.category} Electronics </h3>
        </Row>
        <Row>
            <p> ${product.price} $19.99</p>
            <Button variant="contained">Add To Cart</Button>
        </Row>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
</ThemeProvider>

)
};

export default product;

