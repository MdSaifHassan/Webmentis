"use client";
import React, { useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import TypographyComponent from "@/Components/Typography/Typography";
import InputField from "@/Components/Input/InputField";
import ButtonComponent from "@/Components/Button/Button";
import formFields from "@/module/Contactus/formFields";
import textContent from "@/module/Contactus/textContent";
import { FaHome, FaPhoneAlt } from "react-icons/fa";

const ConsultationPage = () => {
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
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
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#EBEBEB",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 0,
      }}
    >
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          background: "linear-gradient(250deg,rgb(7, 28, 189) 0%, #576BFC 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: 3, md: "100px 20px" },
          borderRadius: { xs: 0, md: 2 },
        }}
      >
        <Card
          sx={{
            padding: { xs: 0, md: 5 },
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "100%",
            backgroundColor: "transparent",
            boxShadow: 0,
          }}
        >
          <TypographyComponent
            {...textContent.leftSection.heading}
            text={textContent.leftSection.heading.text}
            sx={{
              fontSize: { xs: "0.8rem", md: "0.8rem" },
              lineHeight: { xs: "2.5rem", md: "2.5rem" },
            }}
          />
          <TypographyComponent
            mt={3}
            {...textContent.leftSection.title}
            text={textContent.leftSection.title.text}
            sx={{
              fontSize: { xs: "2rem", md: "4rem" },
              lineHeight: { xs: "2.5rem", md: "4rem" },
            }}
          />
          <Box mt={2}>
            {/* Email */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <FaHome style={{ color: "#03228F", fontSize: "20px" }} />
              </Box>
              <Box>
                <TypographyComponent
                  {...textContent.leftSection.emailLabel}
                  text={textContent.leftSection.emailLabel.text}
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                />
                <TypographyComponent
                  {...textContent.leftSection.emailValue}
                  text={textContent.leftSection.emailValue.text}
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                />
              </Box>
            </Box>

            {/* Phone */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "16px",
                }}
              >
                <FaPhoneAlt style={{ color: "#03228F", fontSize: "20px" }} />
              </Box>
              <Box>
                <TypographyComponent
                  {...textContent.leftSection.phoneLabel}
                  text={textContent.leftSection.phoneLabel.text}
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                />
                <TypographyComponent
                  {...textContent.leftSection.phoneValue}
                  text={textContent.leftSection.phoneValue.text}
                  sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                />
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          padding: { xs: 0, md: 5 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            padding: 4,
            height: "100%",
          }}
        >
          <TypographyComponent
            mb={2}
            {...textContent.rightSection.heading}
            text={textContent.rightSection.heading.text}
          />
          <TypographyComponent
            mb={5}
            {...textContent.rightSection.title}
            text={textContent.rightSection.title.text}
          />
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
                multiline={field.type === "textarea"}
                variant="filled"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                  },
                  backgroundColor: "#ffffff",
                  marginBottom: 2,
                  borderRadius: 1,
                }}
              />
            ))}
            <Box mt={5}>
              <ButtonComponent
                label="Submit Now"
                color="primary"
                type="submit"
                size="large"
                sx={{
                  width: { xs: "100%", md: "auto" }
                }}
              />
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConsultationPage;
