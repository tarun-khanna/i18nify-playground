import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { LANGS } from 'src/constants/locale';
import { useLocaleContext } from 'src/context/localeContext';
import { Select } from '@mui/material';

export default function LanguagePopover() {
  const { locale, setLocale } = useLocaleContext();

  return (
    <Select
      size="small"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          p: 0,
          mt: 1,
          ml: 0.75,
          width: 180,
        },
      }}
      value={locale}
      onChange={(ev) => {
        setLocale(ev.target.value);
      }}
    >
      {LANGS.map((option) => (
        <MenuItem
          key={option.value}
          selected={option.value === LANGS[0].value}
          sx={{ typography: 'body2', py: 1 }}
          value={option.value}
        >
          <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />
        </MenuItem>
      ))}
    </Select>
  );
}
