import React from 'react';
import { Chip, Box } from '@mui/material';

const Tags = (props) => {
  const { tags, id } = props || {};
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: '0.5rem', mb: '0.5rem' }}>
      {tags &&
        tags.map((tag, index) => (
          <Chip
            key={id + index}
            label={tag}
            color="default"
            size="small"
            sx={{ fontSize: '11px', px: '5px', letterSpacing: '1px', fontWeight: 'lighter' }}
          />
        ))}
    </Box>
  );
};

export default Tags;

