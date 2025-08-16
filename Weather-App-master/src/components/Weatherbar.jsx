import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Weatherbar = ({icon,celcius,time}) => {
    return (
        <Box className="glass"
            sx={{
                width: '250px'
            }}>
            <Box sx={{display:'flex', alignItems:'center',justifyContent:'space-around'}} >
                <img src={icon} alt="weather" />
                <Typography variant='h5' >{celcius}°C</Typography>
                <Divider orientation="vertical" variant='middle'flexItem  />
                <Typography variant='h5' >{time}</Typography>
            </Box>

        </Box>
    )
}

export default Weatherbar;