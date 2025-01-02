'use client';
import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import statsData from '@/module/OurCompany/statsData'; // Import the stats data
import TypographyComponent from '@/Components/Typography/Typography'; // Import reusable TypographyComponent

const AnimatedCircle = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < value) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return value;
        }
      });
    }, 15); // Adjust speed here
    return () => clearInterval(interval);
  }, [value]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: 180, sm: 180, md: 180 }, // Responsive circle size
        height: { xs: 180, sm: 180, md: 180 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
        margin: '0 auto', // Center the circle in small devices
      }}
    >
      {/* Gray Background Circle */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)',
        }}
      >
        <circle
          cx="90"
          cy="90"
          r="75"
          stroke="#E0E0E0"
          strokeWidth="6"
          fill="none"
        />
      </svg>

      {/* Blue Progress Circle */}
      <svg
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: 'rotate(-90deg)',
        }}
      >
        <circle
          cx="90"
          cy="90"
          r="75"
          stroke="#003DA5"
          strokeWidth="7"
          fill="none"
          strokeDasharray="471.24" // Circumference = 2 * Math.PI * 75
          strokeDashoffset={471.24 - (471.24 * progress) / 100}
          strokeLinecap="round" // Added to make the ends of the stroke rounded
        />
      </svg>

      {/* Text in the Center */}
      <TypographyComponent
        variant="h5"
        text={`${progress}+`}
        sx={{
          position: 'absolute',
          fontWeight: 'bold',
          color: '#171717',
          textAlign: 'center',
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }, // Responsive font size
        }}
      />
    </Box>
  );
};

const StatsComponent = () => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {statsData.map((stat, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          sx={{ 
            textAlign: 'center', 
            position: 'relative',
            marginBottom: { xs: '2rem', sm: '2rem', md: '3rem' }, // Responsive margin
            display: 'flex',
            justifyContent: 'center', // Center the content in small devices
            }}
        >
          <AnimatedCircle value={stat.value} />
          {/* Label Below the Circle */}
          <TypographyComponent
            variant="body1"
            text={stat.label}
            sx={{
              position: 'absolute',
              bottom: '-30px',
              width: '100%', // Full width for the label
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#171717',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size for label
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsComponent;
