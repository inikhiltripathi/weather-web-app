import React, { useState } from 'react';
import { Box, Stack, IconButton, InputBase, Drawer } from '@mui/material';
import { Menu, Search, FavoriteBorder, Favorite } from '@mui/icons-material';
import { useCookies } from 'react-cookie';

import DrawerList from './DrawerList';
import { useSearchContext } from '../contexts/SearchContext';

const Navbar = () => {

  const [cookies, setCookie] = useCookies(['favourites']);
  const { search, setSearch, text, setText } = useSearchContext();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (e) => {
    setSearch(text.toLowerCase());
    e.preventDefault();
  };

  const clickFavourite = () => {
    var favourites = (cookies.favourites || []);

    if (search !== "" && search !== undefined && search !== " " && search !== null) {
      if (favourites.includes(search)) {
        let newFavourites = favourites.filter((value) => {
          return value !== search;
        });
        setCookie('favourites', newFavourites, { path: '/' });
      } else {
        favourites.push(search)
        setCookie('favourites', favourites, { path: '/' });
      }
    }
  };

  return (
    <>
      <Stack
        direction={'row'}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        zIndex={10}
        alignItems='center'
        justifyContent='space-between'
        py={1}
        px={{ xs: 0, sm: 1, md: 3 }}
        position="fixed"
        width="100%">
        <IconButton sx={{ color: '#fff' }} onClick={() => setIsOpen(true)} >
          <Menu sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
        </IconButton>
        <Box
          onSubmit={onSubmit}
          component='form'
          className='search'
          sx={{
            display: 'flex',
            maxWidth: '600px',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: '10px'
          }}>
          <InputBase
            sx={{ ml: 1, flex: 1, color: '#000' }}
            placeholder="Enter a Location"
            value={text}
            onInput={(e) => setText(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: '10px', color: '#000' }}>
            <Search />
          </IconButton>
        </Box>
        {
          cookies.favourites && cookies.favourites.includes(search)
            ?
            <IconButton onClick={clickFavourite} sx={{ p: '10px', color: '#fff' }}>
              <Favorite sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
            </IconButton>
            :
            <IconButton onClick={clickFavourite} sx={{ p: '10px', color: '#fff' }}>
              <FavoriteBorder sx={{ fontSize: { xs: '2rem', sm: '3rem' } }} />
            </IconButton>
        }
      </Stack>
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DrawerList setIsOpen={setIsOpen} />
      </Drawer>
    </>
  )
}

export default Navbar;