import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';
import { useLang } from '../../utils/i18n';

const UI = {
  en: {
    main: 'Main Skills & Tools',
    complementary: 'Complementary Skills & Tools',
  },
  es: {
    main: 'Habilidades y herramientas principales',
    complementary: 'Habilidades y herramientas complementarias',
  },
};

const Section = ({ title, children }) => (
  <Box
    sx={(theme) => ({
      textAlign: 'center',
      py: 4,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      boxShadow: '0 6px 20px rgba(15,18,32,0.08), 0 1px 2px rgba(15,18,32,0.04)',
      border: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Typography variant="h3" component="h1" sx={{ color: 'text.primary', py: 2, fontWeight: 900, letterSpacing: -0.4 }}>
      <strong>{title}</strong>
    </Typography>
    {children}
  </Box>
);

export default function Skills() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <section id="skills">
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Section title={t.main}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.mainSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="lg" sx={{ mb: 2 }}>
        <Section title={t.complementary}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.complementarySkills} />
          </Box>
        </Section>
      </Container>
    </section>
  );
}



