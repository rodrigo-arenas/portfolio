import React from 'react';
import { Paper, Typography, Box, Stack, Chip } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { useLang } from '../../utils/i18n';

const CustomTimeline = ({ items = [], position = 'alternate' }) => {
  const [lang] = useLang();

  const localizeDate = (d) => {
    if (typeof d !== 'string') return d;
    // Replace "Present" with ES equivalent; keep other values as-is
    return lang === 'es' ? d.replace(/Present/i, 'Actualidad') : d;
  };

  return (
    <MuiTimeline position={position}>
      {items.map((item) => {
        const { id, date, icon, title, company, description, tags = [] } = item || {};
        return (
          <TimelineItem key={id}>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {localizeDate(date)}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                  width: 44,
                  height: 44,
                  border: '2px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,.15)'
                })}
              >
                <Box sx={{ fontSize: 22, color: '#FFFFFF' }}>{icon}</Box>
              </TimelineDot>
              <TimelineConnector sx={(theme) => ({ backgroundColor: alpha(theme.palette.primary.main, 0.6), width: 2 })} />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Paper
                elevation={0}
                sx={(theme) => ({
                  p: 2,
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  background: `linear-gradient(180deg, ${alpha(theme.palette.secondary.main, 0.06)} 0%, ${theme.palette.background.paper} 54%)`,
                  boxShadow: '0 6px 20px rgba(15,18,32,0.08), 0 1px 2px rgba(15,18,32,0.04)',
                  transition: 'transform .2s ease, box-shadow .2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 28px rgba(15,18,32,0.12), 0 3px 10px rgba(15,18,32,0.06)',
                  },
                })}
              >
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{ textAlign: 'center', mb: 0.5, fontWeight: 800, letterSpacing: -0.2 }}
                >
                  {title}
                </Typography>
                {company && (
                  <Typography variant="subtitle2" sx={{ textAlign: 'center', color: 'text.secondary', mb: 1 }}>
                    {company}
                  </Typography>
                )}
                {description && (
                  <Typography variant="body2" sx={{ mb: 1.5, color: 'text.secondary' }}>
                    {description}
                  </Typography>
                )}

                {/* High-contrast, accessible tag pills */}
                {Array.isArray(tags) && tags.length > 0 && (
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {tags.map((t) => (
                      <Chip
                        key={t}
                        size="small"
                        label={t}
                        color="secondary"
                        variant="filled"
                        sx={(theme) => ({
                          backgroundColor: alpha(theme.palette.secondary.main, 0.30),
                          border: `1px solid ${alpha(theme.palette.secondary.main, 0.45)}`,
                          color: theme.palette.primary.main,
                        })}
                      />
                    ))}
                  </Stack>
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default CustomTimeline;


