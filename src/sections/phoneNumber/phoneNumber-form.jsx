import React from 'react';

import {
  Box,
  Grid,
  Select,
  MenuItem,
  useTheme,
  TextField,
  Typography,
  useMediaQuery,
  FormHelperText,
} from '@mui/material';

import SvgColor from 'src/components/svg-color';

import { dialCodeMap, countryCodeMap, countryCodeAndDialCodeMap, localPhoneNumbersByDialCodeMap } from './data/phoneNumber';

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
      <Grid container alignItems="center" marginTop={4}>
        <Grid item>
          <Typography variant="h5">Please enter phone number.</Typography>
        </Grid>
        <Grid item xs={isMobile ? 12 : 10}>
          <Box display="flex" alignItems="center">
            {showDialCodeSelector ? (
              <Select
                size="small"
                value={dialCode}
                error={error}
                onChange={(ev) => onDialCodeChange(ev.target.value)}
                sx={{
                  height: '54px',
                  alignItems: 'center',
                  display: 'flex',
                  marginRight: 1,
                }}
              >
                {Object.entries(dialCodeMap).map(([code, name]) => (
                  <MenuItem key={code} value={code}>
                    + {code}{' '}
                    <SvgColor
                      src={`/i18nify-playground/assets/flags/${countryCodeAndDialCodeMap[dialCode]}.svg`}
                      sx={{ width: 10, height: 10 }}
                    />
                  </MenuItem>
                ))}
              </Select>
            ) : null}
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

      <Grid item xs={isMobile ? 5 : 8} marginTop={3}>
        <Typography variant="h5">Please select the country</Typography>
        <FormHelperText>
          {utilName} expects the country code as second argument, this is not mandatory. i18nify all
          ways take the dial code as secondary priority
        </FormHelperText>
      </Grid>
      <Grid item xs={isMobile ? 7 : 6} marginTop={1}>
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
    </>
  );
};
export default PhoneNumberForm;
