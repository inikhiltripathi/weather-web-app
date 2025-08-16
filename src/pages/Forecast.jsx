import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

import { useSearchContext } from '../contexts/SearchContext';
import { getForecast } from '../services/ForecastService';
import BgPicker from '../utils/BgPicker';
import Background from '../components/Background';
import Forecastbar from '../components/Forecastbar';

const Forecast = () => {

  const { search } = useSearchContext();
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (search !== "" && search !== undefined && search !== " ") {
      getForecast(search)
        .then(result => {
          setData(result.forecast.forecastday);
          setImage(BgPicker(result.forecast.forecastday[0].day.condition.code));
        });
    }
  }, [search]);

  if (search) {

    if (data) {
      return (
        <Background imageUrl={image}>
          <Box className="glass" width={{ xs: '96vw', sm: '300px' }} sx={{ mt: { xs: 1, md: 3, xl: 5 } }} margin='auto'>
            <Typography fontSize={{ xs: 20, sm: 30 }} textAlign={'center'} fontWeight={800} p={1} >3-Day Forecast</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', minHeight: '60vh', flexWrap: 'wrap' }}>
            {
              data.map((d, index) => {
                return <Forecastbar key={index} icon={d.day.condition.icon} date={d.date} night={d.day.mintemp_c} humidity={d.day.avghumidity} day={d.day.maxtemp_c} />
              })
            }
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

export default Forecast;