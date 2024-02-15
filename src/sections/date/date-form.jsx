import React from 'react';
import dayjs from 'dayjs';

import { Grid, useTheme, useMediaQuery } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import IntlOptionsDateForm from 'src/components/intlOptionsDateForm';

const DateForm = ({ inpValue, onInpChange, utilName, includeIntlOptions = true }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container rowSpacing={5} alignItems="center">
        <Grid item xs={isMobile ? 12 : 10} sx={{ mb: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker value={dayjs(inpValue)} onChange={onInpChange} />
          </LocalizationProvider>
        </Grid>
      </Grid>
      {includeIntlOptions && <IntlOptionsDateForm utilName={utilName}/>}
    </>
  );
};
export default DateForm;
