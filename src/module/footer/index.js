'use client'

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import footerData from '@/module/footer/FooterDtata';
import Link from 'next/link';

const Footer = () => {
  const { about, services, contact, copyright } = footerData;

  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0", 
        borderRadius: "12px", 
        padding: { xs: '10px 15px', sm: '20px 20px' }, 
        backgroundColor: '#f9f9f9', 
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)', 
        marginTop: '10px', 
        textAlign: 'center', // Default for small screens
      }}
    >
      <Grid
        container
        spacing={{ xs: 3, sm: 4 }} 
        sx={{
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: { xs: 'center', sm: 'flex-start' }, 
          maxWidth: '1300px', 
          margin: '0 auto', 
        }}
      >
        {/* About Us Section */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            About Us
          </Typography>
          <Typography variant="body2" color="textSecondary" mt={2}>
            {about.text}
          </Typography>
          <Box mt={3} display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }} flexWrap="wrap">
            {about.socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '22px',
                  background: '#EBEBEB',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '6px', 
                  color: '#333', 
                  textDecoration: 'none', 
                  transition: 'background 0.3s ease', 
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#ddd')} 
                onMouseLeave={(e) => (e.currentTarget.style.background = '#EBEBEB')}
              >
                {social.icon}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Services Section */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Our Services
          </Typography>
          {services.map((service, index) => (
            <Typography key={index} variant="body2" mt={2}>
              <Link 
                href={service.link} 
                style={{ 
                  color: '#555', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#000')} 
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                {service.name}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Contact Info Section */}
        <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Contact Info
          </Typography>
          {contact.map((item, index) => (
            <Typography key={index} variant="body2" color="textSecondary" mt={2}>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box mt={6} textAlign="center">
        <Typography variant="caption" color="textSecondary">
          {copyright}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
