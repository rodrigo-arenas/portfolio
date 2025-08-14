import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

const NavBarItems = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
      {menuConfig.sidebarData.map((item) => {
        const active = location.pathname === item.path;
        return (
          <ListItemButton
            key={item.id}
            component={Link}
            to={item.path}
            sx={{
              color: active ? '#ffffff' : '#f5f5f5',
              alignItems: 'center',
              px: 2,
              borderBottom: active ? '3px solid #ffffff' : 'none'
            }}
          >
            <ListItemIcon sx={{ color: '#f5f5f5', minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        );
      })}
    </Box>
  );
};

export default NavBarItems;

