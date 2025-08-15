import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavBarItems from './NavBarItems';
import LanguageSwitch from './LanguageSwitch';

const NavBar = () => {
  return (
    <>
      <AppBar
          position="sticky"
          color="default"
          elevation={0}
          sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', zIndex: 1400, backdropFilter: 'blur(6px)' }}
        >
        <Toolbar sx={{ justifyContent: 'start', gap: 2, width: '100%' }}>
          <NavBarItems />
          <Box sx={{ flexGrow: 1 }} />
          <LanguageSwitch size="small" />
        </Toolbar>
      </AppBar>
      <Box sx={(theme) => ({ ...theme.mixins.toolbar })} />
    </>
  );
};

export default NavBar;


