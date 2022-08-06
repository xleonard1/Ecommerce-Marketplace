import {
  Box,
  Drawer,
  Typography,
  Badge,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { ShoppingCart, Delete } from "@mui/icons-material";
import React, { useState } from "react";

const Sort = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        width: "50%",
      }}
      className="box-shadow"
    >
      <Typography>
        <strong>Showing:</strong> 10 products out of 12 products
      </Typography>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{ alignItems: 'center'}}
          onClick={handleClick}
        >
          SORT BY
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Newest</MenuItem>
          <MenuItem onClick={handleClose}>Price: Low to High</MenuItem>
          <MenuItem onClick={handleClose}>Price: High to Low</MenuItem>
        </Menu>
      </Box>
  );
};

export default Sort;
