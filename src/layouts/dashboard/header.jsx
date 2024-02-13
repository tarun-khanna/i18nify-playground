import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

import { NAV, HEADER } from './config-layout';
import LanguagePopover from './common/language-popover';
// import GitHubIcon from '@mui/icons-material/GitHub';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const navigateToExternal = (link) => {
    window.open(link, '_blank');
  };

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Box sx={{ flexGrow: 1 }} />
      <Stack direction="row" alignItems="center" spacing={2}>
        <SvgColor
          onClick={() => navigateToExternal('https://github.com/razorpay/i18nify/')}
          src="/i18nify-playground/assets/icons/ic_github.svg"
          sx={{ width: 30, height: 30, background: '#6b6b6b', cursor: 'pointer' }}
        />
        <img
          onClick={() => {
            navigateToExternal('https://www.npmjs.com/package/@razorpay/i18nify-js');
          }}
          src="/i18nify-playground/assets/icons/ic_npm.svg"
          style={{ height: 25, background: '#CC3534', cursor: 'pointer' }}
        />

        <LanguagePopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
