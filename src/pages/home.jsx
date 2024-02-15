import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import { Box, Grid, Link, Container, Typography, useMediaQuery } from '@mui/material';

function generateRandomColor() {
  const colorList = [
    '#305EFF',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
    '#FFC300',
    '#FF5733',
    '#C70039',
    '#900C3F',
  ];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  return colorList[randomIndex];
}

const Home = () => {
  const [color, setColor] = useState('#305EFF');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(generateRandomColor());
    }, 2000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container maxWidth="xl">
      <Helmet>
        <title> i18nify </title>
      </Helmet>
      <Grid container>
        <Typography
          sx={{
            mb: 2,
            fontSize: '72px',
            fontStyle: 'normal',
            lineHeight: '78px',
            color,
          }}
          variant="h1"
        >
          Welcome to Geo Smart !
        </Typography>

        <Grid item xs={12} sm={9} sx={{ mb: 2 }}>
          <Typography variant="body1">
            A one-stop solution built in javascript for all your internationalization needs. Hey,
            dive into this JavaScript toolkit—it’s like having a magic kit for your app! 🪄✨
            Picture this: modules for phoneNumber, currency, date—they’re like enchanted tools that
            make your app talk fluently in any language, anywhere! It’s your ticket to making your
            app a global citizen, no matter where it goes! And hey, hang tight—I’ll break down each
            of these enchanting modules in the sections coming up! 🌍📱💸🗓️
          </Typography>
        </Grid>

        <Grid container sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6}>
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                Modules
              </Typography>
              <Box>
                <Link
                  color="#2950DA"
                  component="button"
                  underline="none"
                  onClick={() => navigate('/number')}
                >
                  Number
                </Link>
              </Box>
              <Box>
                <Link
                  color="#2950DA"
                  component="button"
                  underline="none"
                  onClick={() => navigate('/phone')}
                >
                  Phone Number
                </Link>
              </Box>
              <Box>
                <Link
                  color="#2950DA"
                  component="button"
                  underline="none"
                  onClick={() => navigate('/date')}
                >
                  Date
                </Link>
              </Box>
              <Box>
                <Link
                  color="#2950DA"
                  component="button"
                  underline="none"
                  onClick={() => navigate('/state')}
                >
                  Core State module
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ mb: 1 }} fontWeight="600">
                Plugins
              </Typography>
              <Box>
                <Link
                  component="button"
                  underline="none"
                  onClick={() => navigate('/plugins')}
                  color="#2950DA"
                >
                  i18nify-react
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ mb: 1 }} fontWeight="600">
                Polyfills
              </Typography>
              <Box>
                <Link
                  component="button"
                  underline="none"
                  onClick={() => navigate('/plugins')}
                  color="#2950DA"
                >
                  FormatNumberByParts
                </Link>
              </Box>
            </Grid>
          </Grid>

          {!isMobile && (
            <Grid item xs={12} sm={6}>
              <img height="390px" src="/i18nify-playground/assets/world_rotating.gif" alt="globe" />{' '}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
