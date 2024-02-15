import React from 'react';

import {
  Box,
  Select,
  MenuItem,
  OutlinedInput,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { DATE_FORMAT_INTL_INPUTS } from 'src/constants/date';
import { useIntlOptionsDateContext } from 'src/context/intlOptionsDateContext';

const IntlOptionsDateForm = ({ utilName }) => {
  const { intlDateOptions, setIntlDateOptions } = useIntlOptionsDateContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleInputChange = (key, value) => {
    setIntlDateOptions((prevState) => {
      const newData = {
        ...prevState,
        [key]: value,
      };
      return newData;
    });
  };

  const renderInput = (input) => {
    if (input.supportedUtilName.includes(utilName)) {
      if (input.type === 'select') {
        return (
          <Grid container key={input.key} alignItems="center" spacing={1}>
            <Grid item xs={isMobile ? 5 : 4}>
              <Typography variant="body1">{input.label}</Typography>
            </Grid>
            <Grid item xs={isMobile ? 7 : 6}>
              <Select
                fullWidth
                size="small"
                label={input.label}
                value={intlDateOptions[input.key]}
                onChange={(e) => handleInputChange(input.key, e.target.value)}
              >
                {input.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        );
      }
      return (
        <Grid container key={input.key} alignItems="center">
          <Grid item xs={isMobile ? 5 : 4}>
            <Typography variant="body1">{input.label}</Typography>
          </Grid>
          <Grid item xs={isMobile ? 7 : 6}>
            <OutlinedInput
              type={input.type}
              fullWidth
              size="small"
              value={intlDateOptions[input.key]}
              onChange={(e) => handleInputChange(input.key, e.target.value)}
            />
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography sx={{ mb: 2 }} variant="h5">
        Intl Options:
      </Typography>

      {DATE_FORMAT_INTL_INPUTS.map((input) => (
        <Box sx={{ mb: 2 }}>{renderInput(input)}</Box>
      ))}
    </Box>
  );
};

export default IntlOptionsDateForm;
