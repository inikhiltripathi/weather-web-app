import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import moment from 'moment';

const Forecastbar = ({ icon, night, humidity, day, date }) => {
    return (
        <Box className="glass"
            sx={{
                width: { xs: '96%', sm: '450px' },
                marginX: 'auto',
                my: { xs: 1, md: 2 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 1
            }}>
            <Typography fontWeight={800} textAlign='center' fontSize={{ xs: 20, md: 25 }} >{moment(date).format('DD MMMM')}</Typography>
            <img src={icon} width={90} alt="weather" />
            <Box sx={{ display: 'flex', justifyContent: 'space-around', w: '100%' }}>
                <Box
                    width={{ xs: '30%', sm: '150px' }}
                    px={{ xs: 1, sm: 2 }}
                    pt={1} display="flex"
                    alignItems="center"
                    flexDirection="column" >
                    <Typography fontWeight={800} fontSize={{ xs: '20px', md: '34px' }}>{day}°C</Typography>
                    <Typography fontSize={20} >Day</Typography>
                </Box>
                <Divider orientation='vertical' variant='middle' flexItem />
                <Box
                    width={{ xs: '30%', sm: '150px' }}
                    px={{ xs: 1, sm: 2 }}
                    pt={1} display="flex"
                    alignItems="center"
                    flexDirection="column">
                    <Typography fontWeight={800} fontSize={{ xs: '20px', md: '34px' }}>{night}°C</Typography>
                    <Typography fontSize={20} >Night</Typography>
                </Box>
                <Divider orientation='vertical' variant='middle' flexItem />
                <Box
                    width={{ xs: '30%', sm: '150px' }}
                    px={{ xs: 1, sm: 2 }}
                    pt={1} display="flex"
                    alignItems="center"
                    flexDirection="column">
                    <Typography fontWeight={800} fontSize={{ xs: '20px', md: '34px' }}>{humidity}%</Typography>
                    <Typography fontSize={20} >Humidity</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Forecastbar;