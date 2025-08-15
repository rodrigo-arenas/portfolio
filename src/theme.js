import { createTheme } from '@mui/material/styles';

const paletteTokens = {
  primary: '#0B1220',
  secondary: '#06B6D4',
  bg: '#F7FAFC',
  paper: '#FFFFFF',
  textPrimary: '#0B1220',
  textSecondary: '#5B6B7A',
  divider: 'rgba(15, 18, 32, 0.12)',
  info: '#0EA5E9',
  success: '#16A34A',
  warning: '#F59E0B',
  error: '#EF4444',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: paletteTokens.primary },
    secondary: { main: paletteTokens.secondary },
    background: { default: paletteTokens.bg, paper: paletteTokens.paper },
    text: { primary: paletteTokens.textPrimary, secondary: paletteTokens.textSecondary },
    divider: paletteTokens.divider,
    info: { main: paletteTokens.info },
    success: { main: paletteTokens.success },
    warning: { main: paletteTokens.warning },
    error: { main: paletteTokens.error },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    h1: { fontWeight: 900, letterSpacing: -0.8 },
    h2: { fontWeight: 900, letterSpacing: -0.6 },
    h3: { fontWeight: 800, letterSpacing: -0.4 },
    h4: { fontWeight: 800 },
    subtitle1: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: paletteTokens.bg,
          color: paletteTokens.textPrimary,
        },
        '::selection': {
          backgroundColor: 'rgba(6, 182, 212, 0.24)',
        },
        a: {
          color: paletteTokens.secondary,
          textDecoration: 'none',
        },
        'a:hover': {
          textDecoration: 'underline',
        },
      },
    },
    MuiAppBar: {
      defaultProps: { color: 'default', elevation: 0, position: 'sticky' },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: 'blur(6px)',
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 64,
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 20,
          border: `1px solid ${theme.palette.divider}`,
          boxShadow: '0 6px 24px rgba(15,18,32,0.06), 0 1px 2px rgba(15,18,32,0.04)',
          transition: 'transform .2s ease, box-shadow .2s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 32px rgba(15,18,32,0.10), 0 2px 8px rgba(15,18,32,0.06)',
          },
        }),
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 700,
        },
        containedPrimary: {
          color: '#fff',
        },
        containedSecondary: {
          color: '#0B1220', // readable on cyan
        },
        outlined: ({ theme }) => ({
          borderWidth: 2,
          '&:hover': { borderWidth: 2, backgroundColor: 'rgba(6,182,212,0.08)' },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 700,
        },
        filled: ({ theme }) => ({
          backgroundColor: 'rgba(6,182,212,0.16)',
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 12,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.main,
            boxShadow: '0 0 0 3px rgba(6,182,212,0.20)',
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          borderRadius: 12,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTooltip: {
      defaultProps: { arrow: true },
      styleOverrides: {
        tooltip: {
          fontSize: 12,
          borderRadius: 8,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({ opacity: 0.8, borderColor: theme.palette.divider }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          borderColor: theme.palette.divider,
          '&.Mui-selected': {
            backgroundColor: 'rgba(6,182,212,0.18)',
            borderColor: theme.palette.secondary.main,
          },
        }),
      },
    },
  },
});

export default theme;






