import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Typography color="#fcbe11" sx={{ mb: 2 }} variant="h2">
          Welcome to i18nify !
        </Typography>

        <Grid item xs={9} sx={{ mb: 2 }}>
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
              color="#4767FD"
              component="button"
              underline="none"
              onClick={() => navigate('/number')}
            >
              Number
            </Link>
          </Box>
          <Box>
            <Link
              color="#4767FD"
              component="button"
              underline="none"
              onClick={() => navigate('/phone')}
            >
              Phone Number
            </Link>
          </Box>
          <Box>
            <Link
              color="#4767FD"
              component="button"
              underline="none"
              onClick={() => navigate('/date')}
            >
              Date
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Plugins
          </Typography>
          <Box>
            <Link component="button" underline="none" onClick={() => navigate('/plugins')}>
              i18nify-react
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
