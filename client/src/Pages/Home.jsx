// import { useQuery } from '@apollo/client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import careerImg from '../images/careers.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../Components/Carousel';




const Home = () => {


  return (
    <main>
      <div className="flex-row justify-center">
       <h1> WELCOME TO OUR ECOMMERCE MARKETPLACE! </h1>
       <Carousel />
       








      </div>
    </main>
  );
};

export default Home;
