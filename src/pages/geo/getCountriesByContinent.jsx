import { Editor } from '@monaco-editor/react';

import Container from '@mui/material/Container';
import { Box, Grid, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getAllContinents, getCountriesByContinent } from '@razorpay/i18nify-js';
import { useEffect, useState } from 'react';

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

export default function GetCountriesByContinent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [code, setCode] = useState('');
  const [continentVal, setContinentVal] = useState('AS');
  const [continentList, setContinentList] = useState([]);

  useEffect(() => {
    getAllContinents().then((res) => setContinentList(res));
  }, []);

  useEffect(() => {
    getCountriesByContinent(continentVal).then((res) => setCode(JSON.stringify(res, null, 2)));
  }, [continentVal]);

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            GetCountriesByContinent
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🌍 Want to explore countries by continent? Meet getCountriesByContinent! This savvy
            function lets you delve into specific continents, unlocking a trove of countries waiting
            to be discovered. Whether you're curious about Africa, Asia, or any other continent,
            just call this function and let the geographical journey begin! 🗺️🔍
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
          <Typography variant="h5">Select Continent</Typography>
          <Select
            size="small"
            value={continentVal}
            onChange={(e) => setContinentVal(e.target.value)}
            sx={{
              height: '57px',
              marginRight: 1,
              width: '100%',
            }}
          >
            {Object.entries(continentList).map(([continentCode, continent]) => (
              <MenuItem key={continentCode} value={continentCode}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textOverflow: 'initial',
                  }}
                >
                  <div width="30px">
                    {continentCode} - {continent.name}
                  </div>
                </Box>
              </MenuItem>
            ))}
          </Select>
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
