import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";


const theme = createTheme();

// export function addProduct() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       name: data.get('productName'),
//       price: data.get('productPrice'),
//       description: data.get('productDescription'),
//       category: data.get('category'),
//     });
//   };

// };

const ProductForm = () => {

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

  const [image, setImage ] = useState("");
  const [ url, setUrl ] = useState("");
  const uploadImage = () => {
  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "tutorial")
  data.append("cloud_name","dcldpb9uf")
  fetch("  https://api.cloudinary.com/v1_1/dcldpb9uf/image/upload",{
  method:"post",
  body: data
  })
  .then(resp => resp.json())
  .then(data => {
  setUrl(data.url)
  })
  .catch(err => console.log(err))
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
          <Grid container spacing={1}>

                <div>
                  <div>
                    <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                    <button onClick={uploadImage}>Upload</button>
                  </div>
                  <div>
                    <h1>Uploaded image will be displayed here</h1>
                    <img src={url}/>
                  </div>
                  </div>




            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                Add A Product To Sell
              </Typography>
            </Grid>
            <Grid item xs={12}>

              {/* **ADD handleSubmit**               onSubmit={}  */}
              <Box component="form" 
              noValidate sx={{ mt: 1 }}>
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
              <Select
                labelId="category"
                id="category"
                value={category}
                label="Category"
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>

              </Select>

              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Add Product
              </Button>
            </Box>
          </Grid>
          </Grid>
        </Box>
    </Container>
</ThemeProvider>

)
};

export default ProductForm;

