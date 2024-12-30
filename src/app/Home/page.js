"use client";

import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import ButtonComponent from "@/Components/Button/Button";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/slide.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 3%",
      }}
    >
      <Grid container alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={12}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            Technology & IT Solutions
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
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
              color: "#b0c4de",
            }}
          >
            We are Leading Technology Solutions Providing Company all over the
            world doing over 3+ years.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <ButtonComponent
              label="Discover More"
              variant="gradient" // Default variant
              size="large"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
