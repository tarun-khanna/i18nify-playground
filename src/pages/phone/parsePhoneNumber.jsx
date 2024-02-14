import { useState } from 'react';
import { parsePhoneNumber } from '@razorpay/i18nify-js/phoneNumber';

import Container from '@mui/material/Container';
import { Grid, useTheme, Typography, useMediaQuery } from '@mui/material';

import PhoneNumberForm from 'src/sections/phoneNumber/phoneNumber-form';
// ----------------------------------------------------------------------

export default function IsValidPhoneNumberView() {
  const [inpValue, setInpValue] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    countryCode: parsedCountryCode,
    dialCode,
    formatTemplate,
    formattedPhoneNumber,
  } = inpValue > 5 ? parsePhoneNumber(`${inpValue}`) : {};

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            ParsePhoneNumber
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🎩✨ This little util helps you validate the phone number values.🌟💸
          </Typography>
        </Grid>

        <Grid item xs={isMobile ? 12 : 7}>
          <PhoneNumberForm
            inpValue={inpValue}
            onInpChange={(val) => setInpValue(val)}
            countryCode={countryCode}
            onCountryCodeChange={(val) => setCountryCode(val)}
            showDialCodeSelector={false}
            utilName="parsePhoneNumber"
          />
        </Grid>
      </Grid>
      <Grid item marginTop={3}>
        <Typography variant="h5">Country Code: {parsedCountryCode}</Typography>
        <Typography variant="h5">Dial Code: {dialCode}</Typography>
        <Typography variant="h5">Format Template: {formatTemplate}</Typography>
        <Typography variant="h5">Formatted PhoneNumber: {formattedPhoneNumber}</Typography>
      </Grid>
    </Container>
  );
}
