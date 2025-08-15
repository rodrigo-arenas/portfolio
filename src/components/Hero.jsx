import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.6 }}>
            Data Science & ML Consulting
          </Typography>
          <Typography sx={{ maxWidth: 720, fontSize: 18, color: 'rgba(255,255,255,.85)' }}>
            I design and ship ML systems that actually move KPIs: LLM‑powered assistants,
            RAG search, AutoML pipelines, and analytics platforms in Azure.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              href="mailto:hi@yourdomain.com?subject=Consulting%20Inquiry&utm_source=hero&utm_medium=cta&utm_campaign=site"
              variant="contained"
              color="secondary"
              size="large"
            >
              Book a Free Intro Call
            </Button>
            <Button component="a" href="/projects" variant="outlined" size="large" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
              See Projects
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
