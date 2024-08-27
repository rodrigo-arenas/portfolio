import React from 'react';
import { Container, Box } from '@mui/material';
import FooterItems from './FooterItems';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#263238', width: '100%', position: 'relative', mt: 3 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', py: 2, color: '#f5f5f5' }}>
                    <FooterItems />
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
