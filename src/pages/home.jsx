import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Typography
          color="#fcbe11"
          sx={{
            mb: 2,
            fontSize: '72px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '78px',
            color: '#305EFF'
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
            <Link component="button" underline="none" onClick={() => navigate('/plugins')} fontWeight="600" color="#2950DA">
              i18nify-react
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Polyfills
          </Typography>
          <Box>
            <Link component="button" underline="none" onClick={() => navigate('/plugins')} fontWeight="600" color="#2950DA">
              FormatNumberByParts
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
