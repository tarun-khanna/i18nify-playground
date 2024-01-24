import { Grid, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { getCurrencyList } from '@razorpay/i18nify-js';
import React from 'react';
import IntlOptionsForm from 'src/components/intlOptionsForm';

const NumberForm = ({ inpValue, currency, onInpChange, onCurrencyChange }) => (
  <>
    <Grid container rowSpacing={5} alignItems="center">
      <Grid item xs={10} sx={{ mb: 2 }}>
        <OutlinedInput
          value={inpValue}
          onChange={(ev) => {
            onInpChange(ev.target.value);
          }}
          size="large"
          fullWidth
          placeholder="Enter value..."
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5">Choose Currency:</Typography>
      </Grid>
      <Grid item xs={6}>
        <Select
          fullWidth
          size="small"
          value={currency}
          onChange={(ev) => onCurrencyChange(ev.target.value)}
        >
          {Object.keys(getCurrencyList()).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
    <IntlOptionsForm />
  </>
);

export default NumberForm;
