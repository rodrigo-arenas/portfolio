import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLang } from '../../utils/i18n';

export default function LanguageSwitch({ size = 'small' }) {
  const [lang, setLang] = useLang();

  const handle = (_evt, val) => {
    if (val) setLang(val);
  };

  return (
    <ToggleButtonGroup
      value={lang}
      exclusive
      onChange={handle}
      size={size}
      color="secondary"
      sx={{
        ml: 1,
        borderRadius: 2,
        '& .MuiToggleButton-root': { px: 1.25, fontWeight: 700 },
      }}
      aria-label="Language selector"
   >
      <ToggleButton value="en" aria-label="English">EN</ToggleButton>
      <ToggleButton value="es" aria-label="Spanish">ES</ToggleButton>
    </ToggleButtonGroup>
  );
}
