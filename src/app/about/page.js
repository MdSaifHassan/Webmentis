import React from 'react';
import { Grid, Box } from '@mui/material';
import Image from 'next/image';
import roundImage from '@/../../public/round.png';
import StatsComponent from '@/Components/Progress/Progress';
import ButtonComponent from '@/Components/Button/Button';
import TypographyComponent from '@/Components/Typography/Typography';
import textContent from '@/module/OurCompany/textContent'; // Import the text content

const OurCompany = () => {
  const { leftSection } = textContent; // Destructure content for easier access

  return (
      <Box
        sx={{
          color: '#171717',
          padding: { xs: '20px', md: '40px' }, // Adjust padding for small and large screens
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' }, // Stack on small devices, row on larger screens
            width: '100%', // Ensure the container takes full width
          }}
        >
          <Grid item xs={12} md={6}>
            <TypographyComponent
              variant={leftSection.heading.variant}
              text={leftSection.heading.text}
              sx={leftSection.heading.sx}
              gutterBottom={leftSection.heading.gutterBottom}
              color={leftSection.heading.color}
            />
            {leftSection.paragraphs.map((para, index) => (
              <TypographyComponent
                key={index}
                variant={para.variant}
                text={para.text}
                paragraph={para.paragraph}
                color={para.color}
              />
            ))}
            <Box mt={2}>
              <ButtonComponent variant="gradientTwo" size="medium" />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: { xs: '250px', sm: '350px', md: '500px' }, // Adjust width based on screen size
                height: { xs: '250px', sm: '350px', md: '500px' }, // Adjust height based on screen size
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Image src={roundImage} alt="Our Company" layout="fill" objectFit="cover" />
            </Box>
          </Grid>
        </Grid>

        <Box mt={6} mb={6}>
          <StatsComponent />
        </Box>
      </Box>
  );
};

export default OurCompany;
