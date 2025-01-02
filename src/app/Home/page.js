"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import ButtonComponent from "@/Components/Button/Button";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/slide.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 3%",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <Typography
            variant="h6"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontWeight: "bold",
              marginBottom: 2,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem", lg: "1.8rem" }, 
              textAlign: { xs: "center", md: "left" },
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
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" }, 
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Excellent IT services <br /> for your success
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 4,
              color: "#b0c4de",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" }, 
              textAlign: { xs: "center", md: "left" },
            }}
          >
            We are a leading Technology Solutions Providing Company, delivering
            excellence worldwide for over 3+ years.
          </Typography>

     
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <ButtonComponent
              label="Discover More"
              variant="gradient" 
              size="large"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
