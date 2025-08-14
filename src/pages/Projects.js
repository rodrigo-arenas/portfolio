import React from 'react';
import Grid2 from '@mui/material/Grid2';
import { Container, Typography } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import projectConfig from '../assets/configs/projectConfig';
import Seo from '../components/Seo';

const Projects = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Selected Projects',
    url: canonical,
    itemListElement: projectConfig.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        description: p.description,
        url: p.url || p.link || canonical,
        image: p.image
      }
    }))
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Seo title="Selected Projects — Rodrigo Arenas" description="A curated set of projects across data science, ML, and products." canonical={canonical} jsonLd={jsonLd} />
      <Typography component="h1" variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        Selected Projects
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {projectConfig.map((item, index) => (
          <Grid2 key={index} xs={12} sm={6} md={4}>
            <CardItem item={item} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;

