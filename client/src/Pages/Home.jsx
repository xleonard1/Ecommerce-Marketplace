// import { useQuery } from '@apollo/client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
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
    </main>
  </Container>
</ThemeProvider>
  );
};

export default Home;
