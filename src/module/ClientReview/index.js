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

export default function ClientReview() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); 

  return (
    <Box id="clients"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "85vh",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          padding: isSmallScreen ? 2 : isMediumScreen ? 2 : 4,
          borderRadius: 1,
          backgroundImage: "url(/bg3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          margin: "auto",
          minHeight:"80%"
        }}
      >
        {/* Left Side: Heading */}
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: isSmallScreen ? "center" : "left",
            marginBottom: isSmallScreen ? 3 : 0,
          }}
        >
          <Typography color="#fff" variant="p">
            Client&apos;s Review
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "white",
              mb: 2,
              mt: 2,
            }}
          >
            What do people say about Aone Infosystems?
          </Typography>
        </Grid>

        {/* Right Side: Testimonials */}
        <Grid
          xs={12}
          md={7}
          container
          sx={{
            display: "flex",
            flexDirection: isSmallScreen || isMediumScreen ? "column" : "row",
            justifyContent: "center",
          }}
        >
          {Client.map((testimonial, index) => (
            <Grid
              xs={12}
              sm={12}
              md={12}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  // minWidth: "100%",
                  backgroundColor: "white",
                  color: "#0d47a1",
                  boxShadow: 3,
                  borderRadius: 2,
                  padding: isSmallScreen ? 1 : 2, 
                  textAlign: "left",
                  margin: isSmallScreen ? "0 auto" : "initial",
                  "@media (min-width: 600px)": {
                    width: "100%", 
                  },
                  "@media (min-width: 960px)": {
                    width: "70%",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position: "relative",
                    padding: isSmallScreen ? 1 : 2, 
                  }}
                >
                  <Rating value={testimonial.rating} readOnly />

                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1">{testimonial.role}</Typography>

                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {testimonial.review}
                  </Typography>

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
