import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";

const ServiceCard = ({ image, title, description }) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 400, md: 500 }, 
        height: 200 , 
        borderRadius: 2,
        textAlign: "left",
        padding: "40px 30px 35px 30px",
        transition: "all 0.3s ease-out",
        boxShadow: "none",
        background: "#EBEBEB",
        "&:hover": {
          boxShadow: 4,
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            marginRight: 2,
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            paddingTop: '10px',
            transition: "transform 0.6s ease-in-out",
          }}
          className="zoom-image"
        >
          <Image
            src={image}
            alt={title}
            width={50}
            height={50}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ServiceCard;