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

/**
 * Clean, theme‑matched timeline (no heavy gradients), bilingual date tweak
 * Props
 *  - items: Array<{ id, date, icon, title, company, description, tags?: string[] }>
 *  - position: 'alternate' | 'left' | 'right'
 */
const Timeline = ({ items = [], position = 'alternate' }) => {
  const [lang] = useLang();

  const localizeDate = (d) => {
    if (typeof d !== 'string') return d;
    return lang === 'es' ? d.replace(/Present/i, 'Actualidad') : d;
  };

  return (
    <MuiTimeline position={position} sx={{
      '& .MuiTimelineItem-root:before': { flex: 0, padding: 0 }, // remove default gutter line
    }}>
      {items.map((item) => {
        const { id, date, icon, title, company, description, tags = [] } = item || {};

        return (
          <TimelineItem key={id}>
            {/* Date pill (right on desktop, left on mobile) */}
            <TimelineOppositeContent
              sx={{
                my: 'auto',
                textAlign: { xs: 'left', md: 'right' },
                minWidth: { md: 140 },
              }}
            >
              <Chip
                label={localizeDate(date)}
                size="small"
                variant="outlined"
                sx={(th) => ({
                  borderColor: th.palette.divider,
                  bgcolor: alpha(th.palette.secondary.main, 0.06),
                  fontWeight: 600,
                })}
              />
            </TimelineOppositeContent>

            {/* Axis + dot */}
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={(th) => ({
                  borderColor: th.palette.secondary.main,
                  backgroundColor: th.palette.background.paper,
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,.06)'
                })}
              >
                <Box sx={(th) => ({ fontSize: 22, color: th.palette.secondary.main })}>{icon}</Box>
              </TimelineDot>
              <TimelineConnector sx={(th) => ({ backgroundColor: th.palette.divider, width: 2 })} />
            </TimelineSeparator>

            {/* Card content */}
            <TimelineContent sx={{ py: 1, px: 2 }}>
              <Paper
                elevation={0}
                sx={(th) => ({
                  p: 2,
                  borderRadius: 3,
                  border: `1px solid ${th.palette.divider}`,
                  backgroundColor: th.palette.background.paper,
                  boxShadow: '0 6px 20px rgba(15,18,32,0.06), 0 1px 2px rgba(15,18,32,0.03)',
                  transition: 'transform .2s ease, box-shadow .2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 28px rgba(15,18,32,0.10), 0 3px 10px rgba(15,18,32,0.06)',
                  },
                })}
              >
                <Stack spacing={0.75}>
                  <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.2 }}>
                    {title}
                  </Typography>
                  {company && (
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                      {company}
                    </Typography>
                  )}
                  {description && (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {description}
                    </Typography>
                  )}

                  {/* Tags: compact, high‑contrast but subtle */}
                  {Array.isArray(tags) && tags.length > 0 && (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 0.5 }}>
                      {tags.map((t) => (
                        <Chip
                          key={t}
                          size="small"
                          label={t}
                          sx={(th) => ({
                            bgcolor: alpha(th.palette.secondary.main, 0.16),
                            border: `1px solid ${alpha(th.palette.secondary.main, 0.35)}`,
                            color: th.palette.primary.main,
                            fontWeight: 700,
                          })}
                        />
                      ))}
                    </Stack>
                  )}
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

export default Timeline;



