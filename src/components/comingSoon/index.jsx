import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const ComingSoon = () => {
  return (
    <Container maxWidth="xl">
      <Box alignItems="center" justifyContent="center">
        <Typography color="#4767FD" variant="h2" sx={{ mb: 2 }} textAlign="center">
          Coming soon...
        </Typography>
      </Box>
    </Container>
  );
};

export default ComingSoon;
