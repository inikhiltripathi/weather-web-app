import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

import Background from '../components/Background';
import BgPicker from '../utils/BgPicker';
import { getRealtime } from '../services/ForecastService';
import { useSearchContext } from '../contexts/SearchContext';

const Realtime = () => {

  const { search } = useSearchContext();
  const [weather, setWeather] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (search !== "" && search !== undefined && search !== " ") {
      getRealtime(search)
        .then(data => {
          setWeather(data.current);
          setImage(BgPicker(data.current.condition.code));
        });
    }
  }, [search, image])

  if (search) {
    if (weather) {
      return (
        <Background imageUrl={image} >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '85vh'
          }}>
            <Box className='glass'
              sx={{
                mt: 3,
                py: { xs: 3, md: 5 },
                px: { xs: 1, sm: 2, md: 3 },
                width: { xs: '94vw', md: '86vw', lg: '76vw' },
                maxWidth: '1000px'
              }}>
              <Typography fontSize={{ xs: '1.6rem', sm: '2rem', md: '2.5rem' }} textAlign={{ xs: 'center', sm: 'start' }} fontWeight={800} pb={2} >Current Weather</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center' }}>
                <Box pr={{ xs: 0, sm: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
                    <img width={'90px'} src={weather && weather.condition.icon} alt="weather" />
                    <Typography pl={1} fontSize={{ xs: '1rem', md: '1.5rem' }} >{weather && weather.condition.text}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: { xs: 'space-around', sm: 'start' }, pb: 2 }} >
                    <Typography fontSize={{ xs: '1rem', sm: '1.5rem', lg: '2rem' }} >temp: <b>{weather.temp_c} °C</b> </Typography>
                    <Typography fontSize={{ xs: '1rem', sm: '1.5rem', lg: '2rem' }} pl={5} >feels: <b>{weather.feelslike_c} °C</b> </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                  <Box>
                    <Typography fontSize={{ xs: '1rem', sm: '1.1rem', lg: '1.4rem' }} >Wind Speed: <b>{weather.wind_kph} kph</b> </Typography>
                    <Typography fontSize={{ xs: '1rem', sm: '1.1rem', lg: '1.4rem' }} >Wind Direction: <b>{weather.wind_dir}</b> </Typography>
                    <Typography fontSize={{ xs: '1rem', sm: '1.1rem', lg: '1.4rem' }} >Pressure: <b>{weather.pressure_mb} mb</b> </Typography>
                  </Box>
                  <Box pl={{ sm: 3 }} pt={{ xs: 3, sm: 0 }} >
                    <Typography fontSize={{ xs: '1rem', sm: '1.1rem', lg: '1.4rem' }} >Cloud: <b>{weather.cloud}%</b> </Typography>
                    <Typography fontSize={{ xs: '1rem', sm: '1.1rem', lg: '1.4rem' }} >Humidity: <b>{weather.humidity}%</b> </Typography>
                    <Typography fontSize={{ xs: '1rem', sm: '1.1rem', lg: '1.4rem' }} >Preciption: <b>{weather.precip_mm} mm</b> </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Background>
      )
    } else {
      return (
        <Background>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '85vh' }}>
            <CircularProgress size="100px" />
          </Box>
        </Background>
      )
    }

  } else {
    return (
      <Background sun={true} />
    )
  }

}

export default Realtime;