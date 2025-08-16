import React from 'react';
import { Box } from '@mui/material';

import Welcome from '../assets/Welcome.jpg';

const Background = ({ children, imageUrl, sun }) => {
    return (
        <Box sx={{
            w: '100vw',
            height: 'content',
            minHeight: '100vh',
            pt: 10,
            backgroundImage:  imageUrl ? `url(${imageUrl})` : (sun && `url(${Welcome})`) ,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: imageUrl ? { xs: '2400px 2000px', sm: '1920px 1400px' } : {xs: "640px 360px",sm:"960px 540px" ,md:"1280px 720px",xl:'1920px 1080px'} ,
            backgroundColor:'#A6CFE8'
        }}>
            {children}
        </Box>
    )
}

export default Background;