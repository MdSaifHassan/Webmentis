"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FiMenu, FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import navLinks from "./NavLinks";

const Header = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle the mobile drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{
        boxShadow: scrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "box-shadow 0.3s ease-in-out",
        padding: "5px 0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Top Contact Info (Desktop Only) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "5px",
          }}
        >
          {/* Empty Box for spacing */}
          <Box />

          {/* Contact Information */}
          <Stack direction="row" spacing={5} alignItems="center">
            {/* Phone Number */}
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "#1E73BE",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiPhone size={12} color="white" />
              </Box>
              <Box sx={{ color: "#1E73BE", fontSize: "14px" }}>
                +91 63822 96078
              </Box>
            </Stack>

            {/* Email Address */}
            <Stack direction="row" spacing={1} alignItems="center">
              <TfiEmail size={20} color="#1E73BE" />
              <Box sx={{ color: "#1E73BE", fontSize: "14px" }}>
                info@webmentis.in
              </Box>
            </Stack>
          </Stack>
        </Box>

        {/* Main Navigation Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0",
          }}
        >
          {/* Logo (Fixed for Mobile) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginTop: { xs: "0", md: "-30px" },
            }}
            onClick={() => router.push("/")}
          >
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={90}
              height={70}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {navLinks.map((link, index) => (
              <Link key={index} href={link.path} passHref>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: "#F7931E",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    marginLeft: "50px",
                    cursor: "pointer",
                  }}
                >
                  {link.title}
                </Box>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <FiMenu size={24} />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                onClick={() => router.push(link.path)}
                sx={{ color: "#F7931E" }}
              >
                <ListItemText primary={link.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
