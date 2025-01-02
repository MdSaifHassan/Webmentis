import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import footerData from '@/module/footer/FooterDtata';
import Link from 'next/link';

const Footer = () => {
  const { about, services, contact, copyright } = footerData;

  return (
    <Box
      sx={{
        backgroundColor: '#EBEBEB',
        padding: '40px 20px',
        textAlign: { xs: 'center', sm: 'left' }, 
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: { xs: 'center', sm: 'flex-start' }, 
        }}
      >
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={2}>
            {about.text}
          </Typography>
          <Box mt={5}>
            {about.socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '24px',
                  background: '#EBEBEB',
                  width: '40px',
                  height: '40px',
                  borderRadius: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 8px', 
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Our Services
          </Typography>
          {services.map((service, index) => (
            <Typography key={index} variant="body2" mt={2}>
              <Link href={service.link} color="inherit" underline="hover">
                {service.name}
              </Link>
            </Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Info
          </Typography>
          {contact.map((item, index) => (
            <Typography key={index} variant="body2" color="textSecondary" mt={2}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>

      <Box mt={8} textAlign={{ xs: 'center', sm: 'left' }}>
        <Typography variant="caption" color="textSecondary">
          {copyright}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
