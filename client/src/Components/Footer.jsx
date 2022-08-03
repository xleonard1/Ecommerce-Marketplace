import * as React from "react";
import { Container, Grid, Box, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/">Contact</Link>
              </Box>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/">Support</Link>
              </Box>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/">Privacy Policy</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
