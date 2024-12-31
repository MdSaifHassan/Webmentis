'use client';
import React, { useState } from 'react';
import { Box, Card, Grid } from '@mui/material';
import TypographyComponent from '@/Components/Typography/Typography';
import InputField from '@/Components/Input/InputField';
import ButtonComponent from '@/Components/Button/Button';
import formFields from '@/module/Contactus/formFields';
import textContent from '@/module/Contactus/textContent';
import { FaHome, FaPhoneAlt } from 'react-icons/fa'; 

const ConsultationPage = () => {
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
      }}
    >
      {/* Left Section */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          background: 'linear-gradient(250deg, #4E95ED 0%, #03228F 100%)',
          padding: '40px 0px',
          borderRadius: 2,
        }}
      >
        <Card
          sx={{
            padding: '40px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '100%',
            backgroundColor: 'transparent',
            boxShadow: 0,
          }}
        >
          {/* Left Section */}
          <TypographyComponent {...textContent.leftSection.heading} text={textContent.leftSection.heading.text} />
          <TypographyComponent mt={3} {...textContent.leftSection.title} text={textContent.leftSection.title.text} />
          <Box mt={3}>
            {/* Email */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  height: '40px',
                  width: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '16px',
                }}
              >
                <FaHome style={{ color: '#03228F', fontSize: '20px' }} />
              </Box>
              <Box>
                <TypographyComponent {...textContent.leftSection.emailLabel} text={textContent.leftSection.emailLabel.text} />
                <TypographyComponent {...textContent.leftSection.emailValue} text={textContent.leftSection.emailValue.text} />
              </Box>
            </Box>

            {/* Phone */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  height: '40px',
                  width: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '16px',
                }}
              >
                <FaPhoneAlt style={{ color: '#03228F', fontSize: '20px' }} />
              </Box>
              <Box>
                <TypographyComponent {...textContent.leftSection.phoneLabel} text={textContent.leftSection.phoneLabel.text} />
                <TypographyComponent {...textContent.leftSection.phoneValue} text={textContent.leftSection.phoneValue.text} />
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={7} sx={{ padding: '20px' }}>
        <Box
          sx={{
            borderRadius: 2,
            padding: 4,
            boxShadow: 0,
          }}
        >
          <TypographyComponent mb={2} {...textContent.rightSection.heading} text={textContent.rightSection.heading.text} />
          <TypographyComponent mb={5} {...textContent.rightSection.title} text={textContent.rightSection.title.text} />
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <InputField
                key={field.id}
                label={field.label}
                name={field.id}
                type={field.type}
                rows={field.rows || undefined}
                value={formData[field.id]}
                onChange={handleChange}
                multiline={field.type === 'textarea'}
                variant="standard"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    border: 'none',
                  },
                  backgroundColor: '#fff',
                }}
              />
            ))}
            <Box mt={5}>
              <ButtonComponent label="Submit Now" color="primary" type="submit" size="large" />
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConsultationPage;
