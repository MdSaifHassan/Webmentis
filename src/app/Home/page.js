'use client';

import React from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        background: 'url(/slide.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontWeight: 'bold',
              marginBottom: 2,
            }}
          >
            Technology & IT Solutions
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              lineHeight: 1.2,
              marginBottom: 3,
            }}
          >
            Excellent IT services <br /> for your success
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 4,
              color: '#b0c4de',
            }}
          >
            We are Leading Technology Solutions Providing Company all over the
            world doing over 3+ years.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: '10px 20px',
                fontWeight: 'bold',
                borderRadius: '25px',
                backgroundColor: '#0058A3',
                '&:hover': {
                  backgroundColor: '#003E7E',
                },
              }}
            >
              Discover More
            </Button>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
