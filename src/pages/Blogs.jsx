import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Search as SearchIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import blogConfig from '../assets/configs/blogConfig';
import Seo from '../components/Seo';
import { withUtm } from '../utils/withUtm';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    seoTitle: 'Writing & Insights — Rodrigo Arenas',
    seoDesc: 'Notes, articles, and insights on data science, ML, and entrepreneurship.',
    overline: 'Blog',
    title: 'Writing & Insights',
    desc: 'Deep dives and quick notes on ML, data systems, and building products.',
    searchPlaceholder: 'Search posts',
    sortRecent: 'Most Recent',
    sortAZ: 'Title (A → Z)',
    ctaRead: 'Read',
  },
  es: {
    seoTitle: 'Escritura & Notas — Rodrigo Arenas',
    seoDesc: 'Notas, artículos e ideas sobre ciencia de datos, ML y emprendimiento.',
    overline: 'Blog',
    title: 'Artículos y notas',
    desc: 'Análisis profundos y notas rápidas sobre ML, sistemas de datos y creación de productos.',
    searchPlaceholder: 'Buscar artículos',
    sortRecent: 'Más recientes',
    sortAZ: 'Título (A → Z)',
    ctaRead: 'Leer',
  },
};

const LinkButton = ({ link }) => (
  <Tooltip title={link.name} placement="top">
    <IconButton
      size="small"
      component="a"
      href={withUtm(link.url, 'blogs_page')}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
    >
      {link.icon ? (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: 18 } }}>{link.icon}</Box>
      ) : (
        <OpenInNewIcon fontSize="inherit" />
      )}
    </IconButton>
  </Tooltip>
);

// Category chip now overlays the image (top-left) so titles never shift
const BlogCard = ({ item, lang = 'en' }) => {
  const desc = item.description_i18n?.[lang] || item.description_i18n?.en || '';
  const categoryLabel =
    typeof item.category === 'string' ? item.category : item.category?.[lang] || item.category?.en;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {item.image && (
        <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.title}
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {categoryLabel && (
            <Chip
              size="small"
              color="secondary"
              label={categoryLabel}
              sx={{ position: 'absolute', top: 10, left: 10, fontWeight: 800 }}
            />
          )}
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: -0.2 }}>
          {item.title}
        </Typography>
        {item.date && (
          <Typography variant="caption" color="text.secondary">
            {new Date(item.date).toLocaleDateString()}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">{desc}</Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1}>
          {item.links?.map((l) => (
            <LinkButton key={l.name} link={l} />
          ))}
        </Stack>
        {item.links?.[0]?.url && (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            href={withUtm(item.links?.[0]?.url, 'blogs_page')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {UI[lang].ctaRead}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default function Blogs() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('recent');
  const [lang] = useLang();
  const t = UI[lang];

  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  const categories = useMemo(() => {
    const set = new Set(['All']);
    blogConfig.forEach((it) => {
      if (it.category) {
        const label = typeof it.category === 'string' ? it.category : it.category?.[lang] || it.category?.["en"];
        if (label) set.add(label);
      }
    });
    return Array.from(set);
  }, [lang]);

  const items = useMemo(() => {
    const filtered = blogConfig.filter((it) => {
      const label = typeof it.category === 'string' ? it.category : it.category?.[lang] || it.category?.en;
      return category === 'All' ? true : label === category;
    });

    const q = query.trim().toLowerCase();
    const searched = q
      ? filtered.filter((it) =>
          (it.title || '').toLowerCase().includes(q) ||
          (it.description_i18n?.en || '').toLowerCase().includes(q) ||
          (it.description_i18n?.es || '').toLowerCase().includes(q)
        )
      : filtered;

    return [...searched].sort((a, b) => {
      if (sort === 'az') return (a.title || '').localeCompare(b.title || '');
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return db - da;
    });
  }, [category, query, sort, lang]);

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDesc} canonical={canonical} />

      <Box
        sx={{
          background: (th) => `linear-gradient(180deg, ${th.palette.background.default} 0%, #ffffff 100%)`,
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: { xs: 5, md: 8 },
          mb: 0,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography variant="overline" color="secondary.main" fontWeight={800}>
              {t.overline}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -0.8 }}>
              {t.title}
            </Typography>
            <Typography color="text.secondary" maxWidth={720}>
              {t.desc}
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'stretch', md: 'center' }}>
              {/* Category chips */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {categories.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    color={c === category ? 'secondary' : 'default'}
                    variant={c === category ? 'filled' : 'outlined'}
                    onClick={() => setCategory(c)}
                    sx={{ borderRadius: 10 }}
                  />
                ))}
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              {/* Search + sort */}
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  size="small"
                  placeholder={t.searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Divider flexItem orientation="vertical" />
                <Select size="small" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <MenuItem value="recent">{t.sortRecent}</MenuItem>
                  <MenuItem value="az">{t.sortAZ}</MenuItem>
                </Select>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <BlogCard item={item} lang={lang} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

