import React from 'react';

import {
  Grid,
  useTheme,
  OutlinedInput,
  useMediaQuery,
} from '@mui/material';

import IntlOptionsForm from 'src/components/intlOptionsForm';

const PhoneNumberForm = ({ inpValue, onInpChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container rowSpacing={5} alignItems="center">
        <Grid item xs={isMobile ? 12 : 10} sx={{ mb: 2 }}>
          <OutlinedInput
            value={inpValue}
            onChange={(ev) => {
              onInpChange(ev.target.value);
            }}
            size="large"
            fullWidth
            placeholder="Enter phone number..."
          />
        </Grid>
      </Grid>
      <IntlOptionsForm />
    </>
  );
};
export default PhoneNumberForm;
