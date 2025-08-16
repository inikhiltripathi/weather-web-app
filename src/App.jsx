import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar';
import CookieAlert from './components/CookieAlert';
import LocationButton from './components/LocationButton';
import Hourly from './pages/Hourly';
import Astronomy from './pages/Astronomy';
import Favourites from './pages/Favourites';
import Realtime from './pages/Realtime';
import Forecast from './pages/Forecast';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Forecast/>} />
      <Route path='/realtime' element={<Realtime/>} />
      <Route path='/hourly' element={<Hourly/>} />
      <Route path='/favourites' element={<Favourites/>} />
      <Route path='/astronomy' element={<Astronomy/>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    <LocationButton/>
    <CookieAlert/>
    </>
  )
}

export default App;
