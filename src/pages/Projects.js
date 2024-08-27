import React from 'react';
import { Grid2 } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import projectConfig from '../assets/configs/projectConfig';

const Projects = () => {
    return (
        <Grid2 container spacing={6} justifyContent="center">
            {projectConfig.map((item, index) => (
                <Grid2 item key={index} xs={12} sm={6} md={4}>
                    <CardItem item={item} />
                </Grid2>
            ))}
        </Grid2>
    );
}

export default Projects;
