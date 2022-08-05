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

// ** addToCart FUNCTION NEEDS REVISING FOR PROPER FUNCTIONALITY **

export function addToCart() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("Product Added To Cart!");

    // console.log({
    //   email: data.get('email'),
    //   message: data.get('message'),
    // });
  };

}

const product = () => {
return (


<ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            minWidth: 600,
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Grid container spacing={1}>
            <Grid item xs={12}>

  
            <Typography component="h1" variant="h2">
            {/* ${product.title}  */}
            Modal Desk Lamp
          </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* **Example Image:** */}
            <img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/products/2022/8/3/1/rx_joss-and-main_taupe-antique-brass-desk-lamp.jpeg.rend.hgtvcom.616.616.suffix/1659535798242.jpeg" width="400" height="400"></img>
            {/* <img src="${product.imageUrl}"> */}
          </Grid>
          <Grid item xs={12}>
            <p> This stylish lamp provides a nice warm glow to your workspace while looking great too. Lorem Ipsum Dolorem etc etc... 
              {/* ${product.description} */}           
            </p>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <h3> Category: 
                {/* ${product.category}  */}
                Home 
                </h3>
              </Grid>
              <Grid item xs={6}>
            <h2 className='productPrice'>
              Price: 
              {/* ${product.price}  */}   
              $29.99           
            </h2>
            </Grid>
            </Grid>
          </Grid>
        <Grid item xs={12}>
        <Box component="form" onSubmit={addToCart} noValidate sx={{ mt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Add To Cart
            </Button>
        </Box>
        </Grid>
        </Grid>
        </Box>
    </Container>
</ThemeProvider>

)
};

export default product;
