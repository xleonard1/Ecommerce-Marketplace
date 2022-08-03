import {
  AppBar,
  Box,
  Button,
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

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderColor: 'black',
  borderRadius: theme.shape.borderRadius,
  width: "30%",
}));

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Menu sx={{color: 'black'}}/>
          </IconButton>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block", alignSelf: "center", color: 'black' } }}
          >
            E-COMMERCE MARKETPLACE
          </Typography>
        </Box>
        <Search>
          <InputBase placeholder="Search Products"/>
        </Search>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '25%'}}>
        <Icons>
          <Badge badgeContent={1}>
            <ShoppingCart />
          </Badge>
        </Icons>
        <Button
          variant="text"
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchororigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformorigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{color: 'black'}}
        >
          <Typography>Brands</Typography>
        </Button>
        <Button sx={{color: 'black'}}><Typography>Shop</Typography></Button>
        <Button sx={{color: 'black'}}><Typography>Welcome</Typography></Button>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
