import React from 'react';
import { Box, IconButton } from '@mui/material';

const CardIcons = (props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0.5 }}>
            {props.item.links.map((link) => (
                <IconButton
                    key={props.item.id + link.name}
                    title={link.name}
                    href={link.url}
                    target={props.item.target}
                    rel="noopener noreferrer"
                    color="primary"
                    sx={{ color: '#263238', padding: 0.5 }}
                >
                    {link.icon}
                </IconButton>
            ))}
        </Box>
    );
}

export default CardIcons;
