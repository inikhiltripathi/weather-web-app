import React, { useState } from 'react';
import { IconButton, Snackbar, Alert } from '@mui/material';
import { ShareLocation } from '@mui/icons-material';

import { useSearchContext } from '../contexts/SearchContext';

const LocationButton = () => {

  const { setSearch, setText } = useSearchContext();
  const [open, setOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(true);

  const handleClick = () => {

    const successCallback = (position) => {
      setSearch(`${position.coords.latitude},${position.coords.longitude}`);
      setText(`${position.coords.latitude},${position.coords.longitude}`);
      setOpen(true);
      setIsComplete(true);
    }

    const errorCallback = () => {
      setOpen(true);
      setIsComplete(false);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      setOpen(true);
      setIsComplete(false);
    }

  }
  return (
    <>
      <IconButton onClick={handleClick}
        sx={{
          color: '#fff',
          position: 'fixed',
          bottom: { xs: '6px', sm: '10px' },
          right: { xs: '4px', sm: '10px', md: '16px' }
        }}>
        <ShareLocation sx={{ fontSize: { xs: '3rem', sm: '4rem' } }} />
      </IconButton>

      <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={isComplete ? "success" : "error"} sx={{ width: '100%', fontSize: '20px' }}>
          {isComplete ? 'We successfully get your location.' : " You need to share your location with us or your browser doesn't support it."}
        </Alert>
      </Snackbar>
    </>
  )
}

export default LocationButton;