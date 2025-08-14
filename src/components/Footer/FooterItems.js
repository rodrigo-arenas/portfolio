import footerConfig from '../../assets/configs/footerConfig';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { withUtm } from '../../utils/withUtm';

const FooterItems = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 400, margin: '0 auto' }}>
      {footerConfig.icons.map((item) => (
        <IconButton
          href={withUtm(item.url, 'footer_icons')}
          key={item.id}
          sx={{ color: '#f5f5f5', p: 2, '&:hover': { backgroundColor: '#276678' } }}
          target={item.target || '_blank'}
          rel="noopener noreferrer"
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default FooterItems;

