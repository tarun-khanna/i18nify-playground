import { Editor } from '@monaco-editor/react';
import { getCurrencyList } from '@razorpay/i18nify-js';

import Container from '@mui/material/Container';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

// ----------------------------------------------------------------------

export default function GetCurrencyList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            getCurrencyList
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🌍💰 It’s your easy-peasy way to snag a whole list of currencies with their symbols and
            names. Simple, straightforward, and totally handy!
          </Typography>
        </Grid>

        <Grid item xs={isMobile ? 12 : 7}>
          <Editor
            theme="vs-dark"
            defaultLanguage="json"
            value={JSON.stringify(getCurrencyList(), null, 2)}
            options={{ minimap: { enabled: false } }}
            height="65vh"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
