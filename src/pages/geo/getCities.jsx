import { Editor } from '@monaco-editor/react';

import Container from '@mui/material/Container';
import { Box, Grid, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import { getAllCountries, getCities, getStatesByCountry, setState } from '@razorpay/i18nify-js';
import { useEffect, useState } from 'react';
import { ALLOWED_COUNTRIES } from 'src/constants/geo';

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

export default function GetCities() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [code, setCode] = useState('');
  const [countryInp, setCountryInp] = useState('IN');
  const [countryList, setCountryList] = useState([]);
  const [stateInp, setStateInp] = useState('');
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    getAllCountries().then((res) =>
      setCountryList(res.filter((country) => ALLOWED_COUNTRIES.includes(country.code)))
    );
  }, []);

  useEffect(() => {
    setStateInp('');
    setCode('');
    getStatesByCountry(countryInp).then((res) => {
      const states = Object.entries(res).map(([_code, state]) => ({
        code: _code,
        name: state.name,
      }));
      setStateList(states);
    });
  }, [countryInp]);

  useEffect(() => {
    if (!stateInp) return;
    getCities(countryInp, stateInp).then((res) => {
      setCode(JSON.stringify(res, null, 2));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateInp]);

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={isMobile ? 12 : 7}>
          <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }}>
            GetCities
          </Typography>

          <Typography variant="body1" sx={{ mb: 6 }}>
            🏙️ Ready to navigate cities with precision? Say hello to getCities! This ingenious
            function empowers you to explore cities based on country and state codes, unleashing a
            world of urban excitement at your fingertips. Whether you're hunting for the pulse of
            New York or the charm of Tokyo, just call this function and let the cityscape adventure
            begin! 🗺️🌆
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
          <Typography variant="h5">Select Country</Typography>
          <Select
            size="small"
            value={countryInp}
            onChange={(e) => setCountryInp(e.target.value)}
            sx={{
              height: '57px',
              marginRight: 1,
              width: '100%',
              mb: 4,
            }}
          >
            {countryList.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textOverflow: 'initial',
                  }}
                >
                  <div width="30px">
                    {country.code} - {country.name}
                  </div>
                </Box>
              </MenuItem>
            ))}
          </Select>
          <Typography variant="h5">Select State</Typography>
          <Select
            size="small"
            value={stateInp}
            onChange={(e) => setStateInp(e.target.value)}
            sx={{
              height: '57px',
              marginRight: 1,
              width: '100%',
            }}
          >
            {stateList.map((state) => (
              <MenuItem key={state.code} value={state.code}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textOverflow: 'initial',
                  }}
                >
                  <div width="30px">
                    {state.code} - {state.name}
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
