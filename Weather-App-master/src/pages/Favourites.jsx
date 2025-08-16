import React from 'react';
import { Box, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';

import Pink from '../assets/pink-sky.jpg';
import Background from '../components/Background';
import Favouritebar from '../components/Favouritebar';

const Favourites = () => {

  const [cookies] = useCookies(['favourites']);

  return (
    <Background imageUrl={Pink} >
      <Box className="glass" width={{ xs: '96vw', sm: '300px' }} sx={{ my: { xs: 3,xl: 5 } }} margin='auto'>
        <Typography fontSize={{ xs: 20, sm: 30 }} textAlign={'center'} fontWeight={800} p={1} >Favourites</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', minHeight: '60vh', flexWrap: 'wrap' }} >
        {
           cookies.favourites && cookies.favourites.map((favourite, index) => {
            return <Favouritebar key={index} city={favourite} />
          })
        }
        {
          !cookies.favourites && <Box className="glass" width={{ xs: '96vw', sm: '300px' }} sx={{ my: { xs: 3,xl: 5 } }} margin='auto'>
          <Typography fontSize={{ xs: 20 }} textAlign={'center'} p={1} >You don't have any favourites.</Typography>
        </Box>
        }
      </Box>
    </Background>
  )
}

export default Favourites;