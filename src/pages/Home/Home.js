import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import Seo from '../../components/Seo';
import homeConfig from '../../assets/configs/homeConfig';

const Home = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rodrigo Arenas',
    url: canonical,
    jobTitle: homeConfig?.titles?.[0] || 'Data Scientist',
    sameAs: [] // you can populate from footerConfig if desired
  };

  return (
    <section>
      <Seo
        title="Rodrigo Arenas — Data Scientist & Consultant"
        description="Modern data science, ML, and product consulting. Selected projects, writing, and experience."
        canonical={canonical}
        jsonLd={jsonLd}
      />

      <Container maxWidth="xl" className="home-content" id="home">
        <Grid2 container justifyContent="center" alignItems="center" className="home-header">
          <Grid2 xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{ color: '#f5f5f5', fontSize: { xs: '2.25rem', sm: '3rem' }, fontWeight: 800 }}>
              {homeConfig.greeting}
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <DynamicTyping titles={homeConfig.titles} />
            </Box>
            <Box sx={{ mt: 4 }}>
              <About about={homeConfig.about} />
            </Box>
          </Grid2>
        </Grid2>
      </Container>

      <Container maxWidth="xl" className="resume-content" id="resume" sx={{ mt: 6 }}>
        <Box sx={{ width: '100%', maxWidth: '960px', mx: 'auto' }}>
          <Timeline items={homeConfig.workTimeline} />
        </Box>
      </Container>
    </section>
  );
};

export default Home;

