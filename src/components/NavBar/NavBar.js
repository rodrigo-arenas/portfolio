import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavBarItems from './NavBarItems';

const NavBar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#263238', zIndex: 1400 }}>
        <Toolbar sx={{ justifyContent: 'start' }}>
          <NavBarItems />
        </Toolbar>
      </AppBar>
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} />
    </>
  );
};

export default NavBar;

