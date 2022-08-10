// import { useQuery } from '@apollo/client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from '../Components/Carousel';

const theme = createTheme();

const Home = () => {

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
