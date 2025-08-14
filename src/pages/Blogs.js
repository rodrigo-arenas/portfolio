import React from 'react';
import Grid2 from '@mui/material/Grid2';
import { Container, Typography } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import blogConfig from '../assets/configs/blogConfig';
import Seo from '../components/Seo';

const Blogs = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Writing & Insights',
    url: canonical,
    blogPost: blogConfig.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.description,
      url: p.url || p.link || canonical,
      image: p.image
    }))
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Seo title="Writing & Insights — Rodrigo Arenas" description="Notes, articles, and insights on data science, ML, and entrepreneurship." canonical={canonical} jsonLd={jsonLd} />
      <Typography component="h1" variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        Writing & Insights
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {blogConfig.map((item, index) => (
          <Grid2 key={index} xs={12} sm={6} md={4}>
            <CardItem item={item} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Blogs;

