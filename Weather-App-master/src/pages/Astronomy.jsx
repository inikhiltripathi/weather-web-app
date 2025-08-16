import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { WbSunny, Nightlight } from '@mui/icons-material';

import Astro from '../assets/astronomy.jpg';
import Background from '../components/Background';
import { getAstronomy } from '../services/ForecastService';
import { useSearchContext } from '../contexts/SearchContext';

const Astronomy = () => {

  const [data, setData] = useState("");
  const { search } = useSearchContext();

  useEffect(() => {
    if (search !== "" && search !== undefined && search !== " ") {
      getAstronomy(search)
        .then(result => setData(result.astronomy.astro));
    }
  }, [search]);

  if (search) {
    if (data) {
      return (
        <Background imageUrl={Astro}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '85vh'
          }}>
            <Box className="glass"
              sx={{
                width: { xs: '94vw', md: '60vw' },

                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                py: 5,
                px: { xs: 2, md: 3 }
              }}>
              <Box sx={{ width: { xs: '90vw', md: '30vw' }, display: 'flex', flexDirection: 'column', mb: 5 }}>
                <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', fontWeight: '800', mb: 1, fontSize: { md: '3rem' }, color: '#f9d71c' }} ><WbSunny fontSize="2rem" sx={{ mr: 1 }} /> Day </Typography>
                <Typography fontSize={{ xs: '1.3rem', sm: '1.7', lg: '2rem', color: '#f9d71c' }} > <b> Sunrise</b> : {data.sunrise}</Typography>
                <Typography fontSize={{ xs: '1.3rem', sm: '1.7', lg: '2rem', color: '#f9d71c' }} > <b> Sunset </b> : {data.sunset}</Typography>
              </Box>
              <Box sx={{ width: { xs: '90vw', md: '30vw' }, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', fontWeight: '800', mb: 1, fontSize: { md: '3rem' }, color: '#0C090A' }} ><Nightlight fontSize="2rem" sx={{ mr: 1 }} /> Night </Typography>
                <Typography fontSize={{ xs: '1.3rem', sm: '1.7', lg: '2rem' }}> <b> Moonrise </b> : {data.moonrise}</Typography>
                <Typography fontSize={{ xs: '1.3rem', sm: '1.7', lg: '2rem' }} > <b> Moonset </b> : {data.moonset}</Typography>
                <Typography fontSize={{ xs: '1.3rem', sm: '1.7', lg: '2rem' }} > <b> Moon Phase </b> : {data.moon_phase}</Typography>
                <Typography fontSize={{ xs: '1.3rem', sm: '1.7', lg: '2rem' }} > <b> Moon Illumination </b>: {data.moon_illumination}%</Typography>
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

export default Astronomy;