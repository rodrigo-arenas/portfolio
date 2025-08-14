import React from 'react';
import { Box, IconButton } from '@mui/material';
import { withUtm } from '../../utils/withUtm';

const CardIcons = (props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
      {props.item.links.map((link) => (
        <IconButton
          key={props.item.id + link.name}
          title={link.name}
          href={withUtm(link.url, 'projects_section')}
          target={props.item.target || '_blank'}
          rel="noopener noreferrer"
          color="primary"
          sx={{ color: '#263238', p: 0.5 }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default CardIcons;

