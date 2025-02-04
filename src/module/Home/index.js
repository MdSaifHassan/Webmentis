"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

const HomePage = () => {
  return (
    <Box id="home"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 3%",
        marginTop: "6rem",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Side - Text Content */}
        <Grid item xs={12} md={6} lg={6}>
          <Typography
            variant="h3"
            sx={{
              letterSpacing: "2px",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
              textAlign: { xs: "center", md: "left" },
              color: "#224ec4",
            }}
          >
            Beyond Pixels, <br /> Beyond Code
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
              textAlign: { xs: "center", md: "left" },
              color: "#224ec4",
            }}
          >
            Webmentis
          </Typography>
          <Typography
            variant="h3"
            sx={{
              letterSpacing: "2px",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "4rem" },
              textAlign: { xs: "center", md: "left" },
              color: "#224ec4",
            }}
          >
            Build Identities
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: 2,
              color: "#F7931E",
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.2rem",
                lg: "1.4rem",
              },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <strong> Webmentis </strong> by <strong> Jasham Qureshi </strong>{" "}
            brings over 10 years of expertise in delivering transformative
            solutions that empower businesses. With a team of skilled
            professionals, we integrate innovation, creativity, and technology
            to help clients achieve their goals and elevate their brands.
          </Typography>
        </Grid>

        {/* Right Side - Image */}
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/2.png" 
            alt="Webmentis"
            width={500}
            height={500}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
