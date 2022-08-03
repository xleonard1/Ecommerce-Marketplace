import * as React from "react";
import { Container, Grid, Box, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/">Contact</Link>
              </Box>
              <Box>
                <Link href="/">Support</Link>
              </Box>
              <Box>
                <Link href="/">Privacy Policy</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link href="/">Login</Link>
              </Box>
              <Box>
                <Link href="/">Register</Link>
              </Box>
              <Box>
                <Link href="/">Privacy</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
              <Box>
                <Link href="/">Backup</Link>
              </Box>
              <Box>
                <Link href="/">History</Link>
              </Box>
              <Box>
                <Link href="/">Roll</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
