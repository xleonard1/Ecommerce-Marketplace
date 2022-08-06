import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  IconButton,
} from "@mui/material";
import {
  ShoppingCart,
  Menu,
  LocalShipping,
  CreditCard,
  LocalPhone,
} from "@mui/icons-material";
import React, { useState } from "react";
import Welcome from "./Welcome";
import Cart from './Cart';


//Custom Styling on bar with phone numbers
const TopBar = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  background: "black",
  height: "50px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//Custom styling on bar
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

//Custom syling on Searchbar
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderColor: "black",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

//Code for NavBar
const Navbar = () => {
  //state for menu drawer
  const [state, setState] = useState({
    left: false,
  });

  //toggle function on menu button
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //list on the menu drawer
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Shop By Category</Typography>
        <Button>Shoes</Button>
        <Button>Bags</Button>
        <Button>Clothes</Button>
        <Button>Electronics</Button>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" style={{ background: "white" }}>
      <TopBar>
        <Badge>
          <LocalShipping style={{ marginRight: "8px" }} />
          <Typography>Free Shipping</Typography>
        </Badge>
        <Badge>
          <CreditCard style={{ marginRight: "8px" }} />
          <Typography>Payment Methods</Typography>
        </Badge>
        <Badge>
          <LocalPhone style={{ marginRight: "8px" }} />
          <Typography>222-222-2222</Typography>
        </Badge>
      </TopBar>
      <StyledToolbar>
        <Box sx={{ display: "flex" }}>
          <React.Fragment key={"left"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <Menu sx={{ color: "black" }} />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </React.Fragment>
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                alignSelf: "center",
                color: "black",
              },
            }}
          >
            E-COMMERCE MARKETPLACE
          </Typography>
        </Box>
        <Search>
          <InputBase placeholder="Search Products" />
        </Search>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "25%",
          }}
        >
          <Cart />
          <Button sx={{ color: "black" }}>
            <Typography>Brands</Typography>
          </Button>
          <Button sx={{ color: "black" }}>
            <Typography>Shop</Typography>
          </Button>
          <Welcome />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
