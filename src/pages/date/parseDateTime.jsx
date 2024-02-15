import { useState } from 'react';
import { parseDateTime } from 'i18nify-date';
import Editor from '@monaco-editor/react';

import dayjs from 'dayjs';
import Container from '@mui/material/Container';
import { Grid, useTheme, Typography, useMediaQuery } from '@mui/material';

import { removeEmptyValues } from 'src/utils';
import { useIntlOptionsDateContext } from 'src/context/intlOptionsDateContext';
import { useLocaleContext } from 'src/context/localeContext';

import DateForm from 'src/sections/date/date-form';

// ----------------------------------------------------------------------

const CodeEditor = ({ value }) => {
  return (
    <Editor
      theme="vs-dark"
      defaultLanguage="json"
      value={value}
      options={{ minimap: { enabled: false } }}
    />
  );
};

export default function ParseDateTime() {
  const [inpValue, setInpValue] = useState(new Date());
  const { intlDateOptions } = useIntlOptionsDateContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { locale } = useLocaleContext();

  const code = JSON.stringify(
    parseDateTime(new Date(inpValue), { locale, intlOptions: removeEmptyValues(intlDateOptions) }),
    null,
    2
  );

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            ParseDateTime
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🔍🗓️ The parseDateTime function is like a time-traveler’s best friend, expertly
            navigating the complex world of dates and times. Whether it’s a string or a Date object
            you’re dealing with, this function seamlessly transforms it into a comprehensive,
            easy-to-digest package of date information, tailored to any locale you desire. 🌍⏲️
          </Typography>
        </Grid>
        {isMobile && (
          <Grid item xs={12}>
            <Grid sx={{ height: '200px' }} container alignItems="center" justifyContent="center">
              <Grid item sx={{ height: '200px', width: '100%', padding: '20px 0px' }}>
                <CodeEditor value={code} />
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          xs={isMobile ? 12 : 7}
          sx={!isMobile && { 'border-right': '1px solid rgba(0,0,0,0.2)', pr: 2 }}
        >
          <DateForm
            utilName="parseDateTime"
            inpValue={inpValue}
            onInpChange={(val) => {
              setInpValue(dayjs(val));
            }}
            includeIntlOptions={true}
          />
        </Grid>
        {!isMobile && (
          <Grid item xs={5}>
            <Grid sx={{ height: '60vh' }} container alignItems="center" justifyContent="center">
              <Grid item sx={{ height: '100%', width: '100%', padding: '0px 20px' }}>
                <CodeEditor value={code} />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
