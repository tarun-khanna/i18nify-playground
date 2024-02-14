import { useState } from 'react';
import { formatPhoneNumber } from '@razorpay/i18nify-js/phoneNumber';

import Container from '@mui/material/Container';
import { Grid, useTheme, Typography, useMediaQuery } from '@mui/material';

import PhoneNumberForm from 'src/sections/phoneNumber/phoneNumber-form';
// ----------------------------------------------------------------------

export default function IsValidPhoneNumberView() {
  const [inpValue, setInpValue] = useState('');
  const [dialCode, setDialCode] = useState('91');
  const [countryCode, setCountryCode] = useState('IN');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const forMattedPhoneNumber = inpValue > 5 ? formatPhoneNumber(`${inpValue}`) : null;

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            FormatPhoneNumber
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
          📞 It’s like your personal phone number stylist, working its magic to make those digits look all snazzy. You can tell it the country code, or it’ll figure it out itself—then presto! It hands you back a phone number looking sharp and dapper in that country’s typical style. ✨🌍
          </Typography>
        </Grid>

        {isMobile && (
          <Grid item xs={12}>
            <Grid sx={{ height: '200px' }} container alignItems="center" justifyContent="center">
              <Grid item sx={{ height: '200px', width: '100%', padding: '20px 0px' }}>
                {forMattedPhoneNumber ? (
                  <Typography variant="h5">{forMattedPhoneNumber}</Typography>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          xs={isMobile ? 12 : 7}
          sx={!isMobile && { 'border-right': '1px solid rgba(0,0,0,0.2)', pr: 2 }}
        >
          <PhoneNumberForm
            inpValue={inpValue}
            dialCode={dialCode}
            onInpChange={(val) => setInpValue(val)}
            onDialCodeChange={(val) => setDialCode(val)}
            countryCode={countryCode}
            onCountryCodeChange={(val) => setCountryCode(val)}
            utilName="formatPhoneNumber"
          />
        </Grid>
        {!isMobile && (
          <Grid item xs={5}>
            <Grid sx={{ height: '60vh' }} container alignItems="center" justifyContent="center">
              <Grid item sx={{ height: '100%', width: '100%', padding: '0px 20px' }}>
                {forMattedPhoneNumber ? (
                  <Typography variant="h5">{forMattedPhoneNumber}</Typography>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
