import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography } from '@mui/material';
import { WbSunny, Favorite, AutoAwesome } from '@mui/icons-material';

const DrawerList = ({ setIsOpen }) => {

    const navigate=useNavigate();

    return (
        <Box
            sx={{ 
                width: 250, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                color: '#fff', 
                backgroundColor: 'rgb(40, 40, 40)' 
            }}
            role="presentation"
            onClick={() => setIsOpen(false)}
            onKeyDown={() => setIsOpen(false)}
        >
            <List>
                {['Realtime', 'Forecast', 'Hourly', 'Astronomy', 'Favourites'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={()=>navigate(text==="Forecast" ? navigate('/') : navigate(`/${text.toLowerCase()}`) )} >
                            <ListItemIcon sx={{ color: '#fff' }} >
                                {index > 2 ? (index === 4 ? <Favorite /> : <AutoAwesome />) : <WbSunny />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Typography sx={{ fontSize: '.9rem', p: 2 }}>
                Made by <a href="https://github.com/AhmedSemih" target="_blank" rel='noreferrer' >Ahmed Semih Erkan</a>
            </Typography>
        </Box>
    )
}

export default DrawerList;