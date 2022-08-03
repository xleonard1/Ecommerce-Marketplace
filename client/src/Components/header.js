import { AppBar, Box, Toolbar, styled, Typography, InputBase, Badge, Avatar,IconButton} from "@mui/material";
import { Mail, Notifications, Menu } from '@mui/icons-material'
import React from "react";

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
                <Box>

                </Box>
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
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar 
                        sx={{width: 30, height: 30}}
                        // src={spencer} 
                        // onClick={(e) => setOpen(true)}
                    />
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
