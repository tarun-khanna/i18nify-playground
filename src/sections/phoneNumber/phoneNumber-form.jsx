import React from 'react';

import {
  Grid,
  Select,
  MenuItem,
  useTheme,
  Typography,
  OutlinedInput,
  useMediaQuery,
} from '@mui/material';

import { countryCodeMap, mockPhoneNumbers } from './data/phoneNumber';

const PhoneNumberForm = ({ inpValue, onInpChange, countryCode, onCountryCodeChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid item xs={isMobile ? 5 : 4}>
        <Typography variant="h5">Choose Country:</Typography>
      </Grid>
      <Grid item xs={isMobile ? 7 : 6}>
        <Select
          fullWidth
          size="small"
          value={countryCode}
          onChange={(ev) => onCountryCodeChange(ev.target.value)}
        >
          {Object.entries(countryCodeMap).map(([code, name]) => (
            <MenuItem key={code} value={code}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </Grid>

      <Grid container alignItems="center" marginTop={4}>
        <Grid item>
          <Typography variant="h5">Please enter phone number with or without dial code</Typography>
        </Grid>
        <Grid item xs={isMobile ? 12 : 10}>
          <OutlinedInput
            value={inpValue}
            onChange={(ev) => {
              onInpChange(ev.target.value);
            }}
            size="large"
            fullWidth
            placeholder={mockPhoneNumbers[countryCode]}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default PhoneNumberForm;
