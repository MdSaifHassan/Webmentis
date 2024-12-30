// components/ButtonComponent.js

import React from 'react';
import { Button } from '@mui/material';

const ButtonComponent = ({
  label = 'Click Me',
  variant = 'contained',
  color = 'primary',
  size = 'medium', 
  onClick,
  disabled = false, 
  fullWidth = false, 
  startIcon, 
  endIcon, 
  ...props 
}) => {
  let backgroundStyle = {};
  if (variant === 'gradient') {
    backgroundStyle = {
      background: 'linear-gradient(90deg, #F6F7F9 19%, #F6F7F9 100%)', 
      color: "#032491",
      '&:hover': {
        background: 'linear-gradient(90deg,rgb(218, 219, 219) 19%,rgb(232, 232, 233) 100%)',
      },
    };
  }
  else if (variant === 'gradientTwo') {
    backgroundStyle = {
      background: 'linear-gradient(45deg, #FF8C00, #FF0080)',
      color: "#fff",
      '&:hover': {
        background: 'linear-gradient(45deg, #FF0080, #FF8C00)',
      },
    };
  }
  else if (variant === 'custom') {
    backgroundStyle = {
      backgroundColor: '#fff', 
      color: '#032491', 
      '&:hover': {
        backgroundColor: "rgba(216, 214, 214, 0)", 
        color: '#032491', 
      },
    };
  }

  return (
    <Button
      variant={variant === 'gradient' || variant === 'custom' || variant === 'gradientTwo' ? 'contained' : variant} // Apply 'contained' style for custom/gradient variants
      color={color}
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        ...backgroundStyle,
        transition: 'all 0.9s ease',
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
