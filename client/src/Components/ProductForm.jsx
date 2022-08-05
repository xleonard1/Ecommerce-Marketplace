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

export function addProduct() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('productName'),
      price: data.get('productPrice'),
      description: data.get('productDescription'),
      category: data.get('category'),
    });
  };

};

const productForm = () => {
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
            Add A Product To Sell
          </Typography>
        </Row>
        <Row>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="productName"
              label="Product Name"
              name="product-name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="product-price"
              label="Sale Price"
              // type="??" INSERT VALIDATION FOR DECIMAL NUMBER   
              id="productPrice"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="productDescription"
              label="Product Description"
              name="product-description"
              variant="outlined"
              rows="6"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="category"
              label="Category"
              name="category"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          </Row>
        </Box>
    </Container>
</ThemeProvider>

)
};

export default productForm;

