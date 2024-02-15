import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { Box, Grid, Link, Container, Typography } from '@mui/material';

function generateRandomColor() {
  const colorList = [
    '#305EFF',
    '#FF5733',
    '#C70039',
    '#900C3F',
    '#581845',
    '#FFC300',
    '#DAF7A6',
    '#FF5733',
    '#C70039',
    '#900C3F',
  ];
  const randomIndex = Math.floor(Math.random() * colorList.length);
  return colorList[randomIndex];
}

import { Box, Grid, Link, Container, Typography } from '@mui/material';

const Home = () => {
  const [color, setColor] = useState('#305EFF');
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(generateRandomColor());
    }, 1000);

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
            fontWeight: 600,
            lineHeight: '78px',
            color,
          }}
          variant="h1"
        >
          Welcome to i18nify!
        </Typography>

        <Grid item xs={12} sm={9} sx={{ mb: 2 }}>
          <Typography variant="body1">
            A one-stop solution built in javascript to provide internationalization support. Hey,
            dive into this JavaScript toolkit—it’s like having a magic kit for your app! 🪄✨
            Picture this: modules for phoneNumber, currency, date—they’re like enchanted tools that
            make your app talk fluently in any language, anywhere! It’s your ticket to making your
            app a global citizen, no matter where it goes! And hey, hang tight—I’ll break down each
            of these enchanting modules in the sections coming up! 🌍📱💸🗓️
          </Typography>
        </Grid>

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
              fontWeight="600"
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
              fontWeight="600"
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
              fontWeight="600"
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
              fontWeight="600"
            >
              Core State module
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Plugins
          </Typography>
          <Box>
            <Link
              component="button"
              underline="none"
              onClick={() => navigate('/plugins')}
              fontWeight="600"
              color="#2950DA"
            >
              i18nify-react
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Polyfills
          </Typography>
          <Box>
            <Link
              component="button"
              underline="none"
              onClick={() => navigate('/plugins')}
              fontWeight="600"
              color="#2950DA"
            >
              FormatNumberByParts
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
