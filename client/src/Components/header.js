import { AppBar, Box, Toolbar, styled, Typography, InputBase, Badge, Avatar,IconButton} from "@mui/material";
import { ShoppingCart, Menu, LocalShipping, CreditCard, LocalPhone } from '@mui/icons-material'
import React from "react";

const TopBar = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'black',
    height: '50px',
    [theme.breakpoints.up('sm')]:{
      display: 'flex'
    }
 }))

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}))

const Icons = styled('div')(({ theme }) => ({
   display: 'none',
   gap: '20px',
   alignItems: 'center',
   [theme.breakpoints.up('sm')]:{
     display: 'flex'
   }
}))

const UserBox = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display: 'none'
    },
 }))

const Navbar = () => {
    // const[open, setOpen] = useState(false); 

    return (
        <AppBar position='sticky' style={{ background: 'red'}}>
                <TopBar>
                        <Badge>
                            <LocalShipping style={{ marginRight: '8px'}}/>
                            <Typography>
                                Free Shipping
                            </Typography>
                        </Badge>
                        <Badge>
                            <CreditCard style={{ marginRight: '8px'}}/>
                            <Typography>
                                Payment Methods
                            </Typography>
                        </Badge>
                        <Badge>
                            <LocalPhone style={{ marginRight: '8px'}}/>
                            <Typography>
                                222-222-2222
                            </Typography>
                        </Badge>
                </TopBar>
                <StyledToolbar>
                        <Box sx={{display:'flex'}}>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        >
                        <Menu />
                        </IconButton>
                        <Typography 
                            variant="h6" 
                            sx={{ display: {xs: 'none', sm: 'block', alignSelf: 'center'}}}
                        >
                            E-COMMERCE MARKETPLACE
                        </Typography>
                        </Box>
                <Search><InputBase placeholder="Search Products"/></Search>
                <Icons>
                    <Badge badgeContent={1}>
                        <ShoppingCart />
                    </Badge>
                </Icons>
                <UserBox>
                    <Avatar 
                        sx={{width: 30, height: 30}}
                        // src={spencer} 
                        // onClick={(e) => setOpen(true)}
                    />
                    <Typography variant='span'>Spencer</Typography>
                </UserBox>
            </StyledToolbar>
            {/* <Box
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Box> */}
        </AppBar>
    )
};

export default Navbar;
