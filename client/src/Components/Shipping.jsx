import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const shipping = () => {

return(

<Container maxWidth="sm">
<Row>
<h1>Shipping</h1>
</Row>
<Row>
    <img src="/assets/images/truck.PNG"></img><img src="/assets/images/fedexLogo.PNG"></img><img src="/assets/images/uspsLogo.PNG"></img>
</Row>
<Row>
<p> All items ship with USPS Priority Mail or FedEx 2-day air to ensure delivery to your location within 2 business days. Shipping costs are included in prices so there are no surprises! You will recieve a confirmation email with your shipping tracking information as soon as your item ships.</p> 
</Row>

)
};