import React from 'react';
import { ListItemButton, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

export default function NavBarItems() {
  const location = useLocation();
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
      {menuConfig.sidebarData.map((item) => {
        const active = location.pathname === item.path;
        return (
          <ListItemButton
            key={item.id}
            component={Link}
            to={item.path}
            aria-current={active ? 'page' : undefined}
            disableRipple
            sx={(theme) => ({
              px: 1.5,
              py: 1,
              borderRadius: 1.5,
              alignItems: 'center',
              transition: 'all .15s ease',
              // Text colors: readable on light AppBar
              color: active ? theme.palette.text.primary : theme.palette.text.secondary,
              // Underline accent (active/hover)
              borderBottom: '3px solid transparent',
              '&:hover': {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.action.hover,
                borderBottomColor: theme.palette.secondary.main,
              },
              ...(active && {
                borderBottomColor: theme.palette.secondary.main,
              }),
            })}
          >
            <ListItemText
              primary={item.title}
              primaryTypographyProps={{
                fontWeight: active ? 800 : 600,
                color: 'inherit',
              }}
            />
          </ListItemButton>
        );
      })}
    </Box>
  );
}



