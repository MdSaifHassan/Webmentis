"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Client from "@/module/ClientReview/clientreviewdata";
import Image from "next/image";
// Dummy data for demonstration

export default function ClientReview() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Mobile
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); // Tablet

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        width: "100%",
        backgroundColor: "#576BFC",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: isSmallScreen ? 2 : isMediumScreen ? 6 : 10,
          borderRadius: 2,
          backgroundColor: "#576BFC",
        }}
      >
        {/* Left Side: Heading */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            textAlign: isSmallScreen ? "center" : "left",
            marginBottom: isSmallScreen ? 3 : 0,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 2,
            }}
          >
            What do people say about Aone Infosystems?
          </Typography>
        </Grid>

        {/* Right Side: Testimonials */}
        <Grid
          item
          xs={12}
          md={6}
          container
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: isSmallScreen || isMediumScreen ? "column" : "row",
            justifyContent: "center",
          }}
        >
          {Client.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={6} // Adjust size for small screens (tablet)
              md={12} // Full width on medium/large screens
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  backgroundColor: "white",
                  color: "#0d47a1",
                  boxShadow: 3,
                  borderRadius: 2,
                  padding: 2,
                  textAlign: "left",
                  width: isSmallScreen
                    ? "100%"
                    : isMediumScreen
                    ? "80%"
                    : "70%",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position:"relative"
                  }}
                >
                  {/* Rating */}
                  <Rating value={testimonial.rating} readOnly />

                  {/* Name and Role */}
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    {testimonial.role}
                  </Typography>

                  {/* Review */}
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {testimonial.review}
                  </Typography>

                  {/* Image in Top-Right */}
                  {/* <Box
                    component="img"
                    src="/quote.png"
                    alt="Quotation Mark"
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      width: 60,
                      height: 50,
                    }}
                  /> */}
                  <Image
                    src="/quote.png"
                    alt="Quotation Mark"
                    width={60}
                    height={50}
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
