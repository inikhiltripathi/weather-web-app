import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider, CircularProgress } from '@mui/material';

import { getRealtime } from '../services/ForecastService';
import { useSearchContext } from '../contexts/SearchContext';

const Favouritebar = ({ city }) => {

    const navigate = useNavigate();
    const { setSearch, setText } = useSearchContext();
    const [data, setData] = useState("");

    useEffect(() => {
        if (city !== undefined && city !== "" && city !== " " && city !== null) {
            getRealtime(city)
                .then(result => setData(result.current));
        }
    }, [city]);

    const onClickCity = () => {
        setSearch(city);
        setText(city);
        navigate('/');
    }

    if (data) {
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
                <Typography
                    fontWeight={800}
                    sx={{ cursor: 'pointer' }}
                    textAlign='center'
                    fontSize={{ xs: 20, md: 25 }}
                    onClick={onClickCity}
                >{city.toUpperCase()}</Typography>
                <img width={90} src={data.condition.icon} alt="weather" />
                <Box sx={{ display: 'flex', justifyContent: 'space-around', w: '100%' }}>
                    <Box
                        width={{ xs: '30%', sm: '150px' }}
                        px={{ xs: 1, sm: 2 }}
                        pt={1} display="flex"
                        alignItems="center"
                        flexDirection="column" >
                        <Typography fontWeight={800} fontSize={{ xs: '20px', md: '34px' }}>{data.temp_c}°C</Typography>
                        <Typography fontSize={20} >Temp</Typography>
                    </Box>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <Box
                        width={{ xs: '30%', sm: '150px' }}
                        px={{ xs: 1, sm: 2 }}
                        pt={1} display="flex"
                        alignItems="center"
                        flexDirection="column">
                        <Typography fontWeight={800} fontSize={{ xs: '20px', md: '34px' }}>{data.feelslike_c}°C</Typography>
                        <Typography fontSize={20} >Feels</Typography>
                    </Box>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <Box
                        width={{ xs: '30%', sm: '150px' }}
                        px={{ xs: 1, sm: 2 }}
                        pt={1} display="flex"
                        alignItems="center"
                        flexDirection="column">
                        <Typography fontWeight={800} fontSize={{ xs: '20px', md: '34px' }}>{data.humidity}%</Typography>
                        <Typography fontSize={20} >Humidity</Typography>
                    </Box>
                </Box>
            </Box>
        )
    } else {
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '85vh' }}>
            <CircularProgress size="100px" />
        </Box>
    }

}

export default Favouritebar;