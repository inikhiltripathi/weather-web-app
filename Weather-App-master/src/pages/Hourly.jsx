import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';

import Background from '../components/Background';
import Weatherbar from '../components/Weatherbar';
import { getForecast } from '../services/ForecastService';
import { useSearchContext } from '../contexts/SearchContext';
import BgPicker from '../utils/BgPicker';

const Hourly = () => {

  const { search } = useSearchContext();
  const [data, setData] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (search !== "" && search !== undefined && search !== " ") {
      getForecast(search)
        .then(result => {
          setData(result.forecast);
          setImage(BgPicker(result.forecast.forecastday[0].day.condition.code));
        })
    }
  }, [search]);


  if (search) {

    if (data) {
      return (
        <Background imageUrl={image} >
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 3, }}>
            <Typography variant='h3' sx={{ textAlign: 'center', width: '240px', p: 1 }} className='glass'>Today</Typography>
          </Box>
          <Grid container spacing={{ xs: 1, md: 3 }} p={1}  >
            {
              data.forecastday[0].hour.map((f) => {
                return <Grid item xs={12} sm={6} md={4} lg={3} xl={2} display='flex' justifyContent="center">
                  <Weatherbar icon={f.condition.icon} celcius={f.temp_c} time={f.time.slice(11, 16)} />
                </Grid>
              })
            }
          </Grid>
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

export default Hourly;