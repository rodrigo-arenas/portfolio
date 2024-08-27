import React from 'react';
import { Grid2 } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import blogConfig from '../assets/configs/blogConfig';

const Blogs = () => {
    return (
        <Grid2 container spacing={6} justifyContent="center">
            {blogConfig.map((item, index) => (
                <Grid2 item key={index} xs={12} sm={6} md={4}>
                    <CardItem item={item} />
                </Grid2>
            ))}
        </Grid2>
    );
}

export default Blogs;
