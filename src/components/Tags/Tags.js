import React from 'react';
import { Chip, Box } from '@mui/material';

const Tags = (props) => {
  const { tags, id } = props || {};
  return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
        {tags && tags.map((tag, index) => (
            <Chip
                key={id + index}
                label={tag}
                color={"default"}
                size="small"
                sx={{ fontSize: '11px', padding: '5px 8px', margin: '0 6px 6px 2px', letterSpacing: '1px', fontWeight: 'lighter' }}
            />
        ))}
      </Box>
  );
};

export default Tags;
