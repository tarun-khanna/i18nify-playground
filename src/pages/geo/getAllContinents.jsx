import { Editor } from '@monaco-editor/react';

import Container from '@mui/material/Container';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getAllContinents } from '@razorpay/i18nify-js';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function GetAllContinents() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [code, setCode] = useState('');

  useEffect(() => {
    getAllContinents().then((res) => setCode(JSON.stringify(res, null, 2)));
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            GetAllContinents
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🌍 Seeking global domination? Look no further than getAllContinents! This ingenious
            function is your map to all seven continents, neatly packaged for your coding pleasure.
            No need to pack your bags—just fire up your IDE and let the exploration begin! 🗺️✨
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
