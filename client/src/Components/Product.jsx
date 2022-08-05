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

// ** addToCart FUNCTION NEEDS REVISING FOR PROPER FUNCTIONALITY **

export default function addToCart() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(Product Added To Cart!);
    // console.log({
    //   email: data.get('email'),
    //   message: data.get('message'),
    // });
  };

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
        <Box component="form" onSubmit={addToCart} noValidate sx={{ mt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add To Cart
            </Button>
        </Row>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
</ThemeProvider>

)
};

export default product;

