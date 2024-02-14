import React from 'react';

import {
  Grid,
  Select,
  MenuItem,
  useTheme,
  TextField,
  Typography,
  Box,
  useMediaQuery,
  FormHelperText,
} from '@mui/material';

import { dialCodeMap, countryCodeMap, localPhoneNumbersByDialCodeMap } from './data/phoneNumber';

const PhoneNumberForm = ({
  inpValue,
  onInpChange,
  dialCode,
  onDialCodeChange,
  countryCode,
  onCountryCodeChange,
  error,
  showDialCodeSelector = true,
  utilName,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid item xs={isMobile ? 5 : 4}>
        <Typography variant="h5">Please select the country</Typography>
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
        <FormHelperText>{utilName} expects the country code as second argument</FormHelperText>
      </Grid>

      <Grid container alignItems="center" marginTop={4}>
        <Grid item>
          <Typography variant="h5">Please enter phone number.</Typography>
        </Grid>
        <Grid item xs={isMobile ? 12 : 10}>
          <Box display="flex" alignItems="center">
            <Select
              size="small"
              value={dialCode}
              onChange={(ev) => onDialCodeChange(ev.target.value)}
              sx={{
                height: '54px',
                alignItems: 'center',
                display: 'flex',
                marginRight: 1
              }}
            >
              {Object.entries(dialCodeMap).map(([code, name]) => (
                <MenuItem key={code} value={code}>
                  + {code}
                </MenuItem>
              ))}
            </Select>
            <TextField
              value={inpValue}
              onChange={(ev) => {
                onInpChange(ev.target.value);
              }}
              size="large"
              fullWidth
              placeholder={localPhoneNumbersByDialCodeMap[dialCode]}
              error={error}
            />
          </Box>
          {showDialCodeSelector ? (
            <FormHelperText>
              One dial code can be applied to multiple regions ex: +1 shared by countries like the
              United States, Canada, Barbados, Bermuda
            </FormHelperText>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};
export default PhoneNumberForm;
