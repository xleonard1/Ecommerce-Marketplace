// import { useQuery } from '@apollo/client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../Components/Carousel';
import  {useEffect} from "react";
import { Grid, Container, CircularProgress } from "@mui/material";
import Box from '@mui/material/Box';
import ProductCard from '../Components/ProductCard';
import Price from '../Components/Price';
import Rating from '../Components/Rating';
import { spacing } from '@mui/system'
import { useQuery } from "@apollo/client";
import {QUERY_ALL_PRODUCTS} from '../utils/queries';
import { useStoreContext } from "../utils/GlobalState";
import {
  UPDATE_PRODUCTS,
} from "../utils/actions";
import Login from "../Pages/Login";


import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useState } from 'react'

const theme = createTheme();


export function SignIn() {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);

    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

}
const Home = () => {
  const {loading, data} = useQuery(QUERY_ALL_PRODUCTS)
  const [state, dispatch] = useStoreContext()

  useEffect(() => {
      if (!loading && data) {
          console.log('data', data)
          dispatch({
              type: UPDATE_PRODUCTS,
              products: data.products
          })
      }
  }, [loading, data])
  console.log('data', data)

  return (
    <ThemeProvider theme={theme}>
    <Container>
        <CssBaseline />
    <main>
      <div className="flex-row justify-center">
       <Carousel />
      
      </div>
      {/* <Box
                  sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >   
            <Grid container xs={12} 
            // direction={'column'} 
            // spacing={10} justifyContent={'right'} alignItems={'space between'}
            >
                <Grid item xs={1} s={2}>
                    <Grid item >
                    <Price />
                    </Grid>
                    <Grid item mt={20} >
                    <Rating />
                    </Grid>
                </Grid>
                <Grid container item xs={10} spacing={2} ml
                ={40} mt={-20}>
                {loading ? <CircularProgress /> :
                state.products.map((product) => (
                    <Grid item key={product.id} xs={12} s={6} md={4} lg={4}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Box> */}
    </main>
  </Container>
</ThemeProvider>
  );
};

export default Home;
