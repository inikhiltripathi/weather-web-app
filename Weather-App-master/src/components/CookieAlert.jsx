import React from 'react';
import { useCookies } from 'react-cookie';
import {Box, Typography, IconButton} from '@mui/material'
import {Done} from '@mui/icons-material';

const CookieAlert = () => {

    const [cookies,setCookie]=useCookies(['isAccept']);

    const handleClick=()=>{
        setCookie('isAccept',true,{path:'/'});
    }

    if(!cookies.isAccept){
        return (
            <Box sx={{
                display:'flex', 
                alignItems:'center',
                opacity:.9, 
                backgroundColor:'#202020',
                position:'fixed',
                bottom:'0px',
                width:'100%',
                justifyContent:'space-between',
                py:{xs:1,md:2},
                px:{xs:1,sm:2,md:5},
                color:'#fff'
                }}>
                <Typography>We use cookies to improve your experience and to make some systems work properly.</Typography>
                <IconButton onClick={handleClick} sx={{color:'#fff'}}>
                <Done sx={{fontSize:'2rem'}} />
                </IconButton>
            </Box>
          )
    }
}

export default CookieAlert;