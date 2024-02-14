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
            🎩✨ This little util helps you validate the phone number values.🌟💸
          </Typography>
        </Grid>

        <Grid item xs={isMobile ? 12 : 7}>
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
      </Grid>
      <Grid item marginTop={3}>
        {forMattedPhoneNumber ? <Typography variant="h5">{forMattedPhoneNumber}</Typography> : null}
      </Grid>
    </Container>
  );
}
