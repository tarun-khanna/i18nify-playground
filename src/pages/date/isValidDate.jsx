import { useState } from 'react';
import { isValidDate } from 'i18nify-date';

import Container from '@mui/material/Container';
import { Grid, useTheme, Typography, useMediaQuery, TextField } from '@mui/material';

// ----------------------------------------------------------------------

export default function IsValidDate() {
  const [inpValue, setInpValue] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            IsValidDate
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🕵️‍♂️🗓️ The isValidDate function now comes with an international flair! It’s a robust date
            validator that not only checks if a date is valid but also ensures it aligns with the
            date format of a specific locale. Perfect for applications catering to a global
            audience, it scrutinizes dates against various international formats, making it a
            versatile tool in your date validation arsenal. 🌍⏳
          </Typography>
        </Grid>
        {isMobile && (
          <Grid item xs={12}>
            <Grid sx={{ height: '100px' }} container alignItems="center" justifyContent="center">
              <Grid item>
                <Typography variant="h2" sx={{ color: isValidDate(inpValue) ? 'green' : 'red' }}>
                  {isValidDate(inpValue).toString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          xs={isMobile ? 12 : 7}
          sx={!isMobile && { 'border-right': '1px solid rgba(0,0,0,0.2)', pr: 2 }}
        >
          <Grid container rowSpacing={5} alignItems="center">
            <Grid item xs={isMobile ? 12 : 10} sx={{ mb: 2 }}>
              <TextField
                id="isValidDate"
                variant="outlined"
                color={inpValue ? (isValidDate(inpValue) ? 'success' : 'error') : ''}
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        {!isMobile && (
          <Grid item xs={5}>
            <Grid container alignItems="center" justifyContent="center">
              <Grid item>
                <Typography variant="h2" sx={{ color: isValidDate(inpValue) ? 'green' : 'red' }}>
                  {isValidDate(inpValue).toString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
