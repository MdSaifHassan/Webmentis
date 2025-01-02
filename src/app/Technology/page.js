'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';
import technologiesData from '@/module/Technology/technologiesData'; // Import technology data
import textContent from '@/module/Technology/textContent'; // Import text content data
import TypographyComponent from '@/Components/Typography/Typography'; // Import reusable Typography component

const TechnologyPage = () => {
  return (
    <Box
      sx={{
        padding: { xs: '2rem', sm: '3rem', md: '5rem 6rem' }, // Responsive padding
        backgroundImage: `url(bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      {/* Heading Section */}
      <TypographyComponent
        variant={textContent.heading.variant}
        text={textContent.heading.text}
        sx={textContent.heading.sx}
      />

      {/* Grid Section */}
      <Grid container spacing={3} justifyContent="center">
        {technologiesData.map((tech, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                '&:hover .line-circle': {
                  backgroundColor: 'white',
                },
              }}
            >
              {/* Container for Image Box */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 150,
                  overflow: 'hidden',
                  borderRadius: '3px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'border-color 0.3s ease',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'white',
                  },
                  '&:hover .img1': {
                    transform: 'translateY(100%)',
                  },
                  '&:hover .img2': {
                    transform: 'translateY(0%)',
                  },
                }}
              >
                {/* Black-and-white image (default) */}
                <Box
                  component="img"
                  src={tech.img1}
                  alt={`${tech.name} black and white`}
                  className="img1"
                  sx={{
                    width: '80%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'absolute',
                    top: 0,
                    left: 15,
                    transform: 'translateY(0%)',
                    filter: 'grayscale(100%)',
                    transition: 'transform 0.3s ease',
                    zIndex: 1,
                  }}
                />

                {/* Colored image (hover) */}
                <Box
                  component="img"
                  src={tech.img2}
                  alt={`${tech.name} colored`}
                  className="img2"
                  sx={{
                    width: '80%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'absolute',
                    top: 0,
                    left: 15,
                    transform: 'translateY(-100%)',
                    transition: 'transform 0.3s ease',
                    zIndex: 2,
                  }}
                />
              </Box>

              {/* Vertical Line and Circle */}
              <Box
                sx={{
                  position: 'relative',
                  width: '20px',
                  margin: '1px auto 0',
                }}
              >
                {/* Vertical Line */}
                <Box
                  className="hover-effect line-circle"
                  sx={{
                    width: '1.5px',
                    height: '50px',
                    margin: '0 auto',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    transition: 'background-color 0.3s ease',
                  }}
                />

                {/* Circle */}
                <Box
                  className="hover-effect line-circle"
                  sx={{
                    width: '12px',
                    height: '12px',
                    margin: '2px auto 0',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    transition: 'background-color 0.3s ease',
                  }}
                />
              </Box>
            </Box>

            {/* Title Section */}
            <TypographyComponent
              variant="body1"
              text={tech.name}
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                marginTop: { xs: 1, sm: 2 }, // Responsive margin
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechnologyPage;
