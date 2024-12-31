import ServiceCard from "@/module/Services/ServicesCard";
import services from "@/module/Services/ServicesCradData";
import { Container, Grid, Typography } from "@mui/material";


export default function Services() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 , "&:hover": {
      "& .zoom-image": {
        transform: "scale(0.9)", 
      },
    },}}>
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 5 }}
      >
        We provide IT solutions Into
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

