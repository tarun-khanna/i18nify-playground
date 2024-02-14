import React from 'react';

import {
  Grid,
  Select,
  MenuItem,
  useTheme,
  TextField,
  Typography,
  FormControl,
  useMediaQuery,
  InputAdornment,
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
        <FormHelperText>
          {utilName} expects the country code as second argument
        </FormHelperText>
      </Grid>

      <Grid container alignItems="center" marginTop={4}>
        <Grid item>
          <Typography variant="h5">Please enter phone number.</Typography>
        </Grid>
        <Grid item xs={isMobile ? 12 : 10}>
          <TextField
            value={inpValue}
            onChange={(ev) => {
              onInpChange(ev.target.value);
            }}
            size="large"
            fullWidth
            placeholder={localPhoneNumbersByDialCodeMap[dialCode]}
            error={error}
            InputProps={{
              startAdornment: showDialCodeSelector ? (
                <InputAdornment position="start">
                  <Select
                    fullWidth
                    size="small"
                    value={dialCode}
                    onChange={(ev) => onDialCodeChange(ev.target.value)}
                  >
                    {Object.entries(dialCodeMap).map(([code, name]) => (
                      <MenuItem key={code} value={code}>
                        + {code}
                      </MenuItem>
                    ))}
                  </Select>
                </InputAdornment>
              ) : null,
            }}
          />
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
