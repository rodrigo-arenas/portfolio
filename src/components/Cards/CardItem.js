import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CardIcons from './CardIcons';

const CardItem = (props) => {
  const { item } = props || {};
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 360, md: 380 },
        height: 450,
        m: 2,
        bgcolor: '#F6F6F6',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        loading="lazy"
        sx={{ height: 220, objectFit: 'cover' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2, flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="h3" textAlign="center">
            <strong>{item.title}</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mt: 1 }}>
            {item.description}
          </Typography>
        </Box>
        <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
        <CardIcons item={item} sx={{ py: 0.3 }} />
      </CardContent>
    </Card>
  );
};

export default CardItem;

