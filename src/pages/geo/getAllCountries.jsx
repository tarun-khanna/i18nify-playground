import { Editor } from '@monaco-editor/react';

import Container from '@mui/material/Container';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getAllCountries } from '@razorpay/i18nify-js';
import { useEffect, useState } from 'react';

// import { getAllCountries } from '@razorpay/i18nify-js';
// ----------------------------------------------------------------------

export default function GetAllCountries() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [code, setCode] = useState('');

  useEffect(() => {
    getAllCountries().then((res) => setCode(JSON.stringify(res, null, 2)));
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            GetAllCountries
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🌍 Ready to dive into the world of nations? Say hello to getAllCountries! This dynamic
            function is your gateway to a comprehensive list of countries spanning the globe. With
            just a simple call, you'll unlock a treasure trove of international data, perfect for
            any coding adventurer. 🗺️🚀
          </Typography>
        </Grid>

        <Grid item xs={isMobile ? 12 : 7}>
          <Editor
            theme="vs-dark"
            defaultLanguage="json"
            value={code}
            options={{ minimap: { enabled: false } }}
            height="65vh"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
