import { useState } from 'react';
import { isValidPhoneNumber } from '@razorpay/i18nify-js/phoneNumber';

import Container from '@mui/material/Container';
import { Grid, useTheme, Typography, useMediaQuery } from '@mui/material';

import PhoneNumberForm from 'src/sections/phoneNumber/phoneNumber-form';
// ----------------------------------------------------------------------

export default function IsValidPhoneNumberView() {
  const [inpValue, setInpValue] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  let message = '';
  let isValid = false;
  if (inpValue.length > 5) {
    const phoneNumber = inpValue.replaceAll(' ', '').replaceAll('-', '');
    console.log(phoneNumber, countryCode, isValidPhoneNumber(phoneNumber, countryCode));
    if (isValidPhoneNumber(phoneNumber, countryCode)) {
      message = 'Valid phone number';
      isValid = true;
    } else {
      message = 'Invalid Phone Number';
      isValid = false;
    }
  }

  const MessageComponent = (
    // eslint-disable-next-line no-nested-ternary
    <Typography variant="h2" color={message.length > 0 ? (isValid ? 'lightseagreen' : 'red') : ''}>
      {message}
    </Typography>
  );
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            isValidPhoneNumber
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🎩✨ This little util helps you validate the phone number values.🌟💸
          </Typography>
        </Grid>

        {isMobile && (
          <Grid item xs={12}>
            <Grid sx={{ height: '100px' }} container alignItems="center" justifyContent="center">
              <Grid item>{MessageComponent}</Grid>
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
            countryCode={countryCode}
            onInpChange={(val) => setInpValue(val)}
            onCountryCodeChange={(val) => setCountryCode(val)}
          />
        </Grid>

        {!isMobile && (
          <Grid item xs={5}>
            <Grid sx={{ height: '60vh' }} container alignItems="center" justifyContent="center">
              <Grid item>{MessageComponent}</Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
