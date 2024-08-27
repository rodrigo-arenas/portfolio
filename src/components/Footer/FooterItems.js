import footerConfig from '../../assets/configs/footerConfig';
import React from 'react';
import { Box, IconButton } from '@mui/material';

const FooterItems = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 400, margin: '0 auto' }}>
            {footerConfig.icons.map((item) => (
                <IconButton
                    href={item.url}
                    key={item.id}
                    sx={{ color: '#f5f5f5', padding: 2, '&:hover': { backgroundColor: '#276678' } }}
                    target={item.target}
                    rel="noopener noreferrer"
                >
                    {item.icon}
                </IconButton>
            ))}
        </Box>
    );
}

export default FooterItems;
