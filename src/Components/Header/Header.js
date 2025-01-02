'use client';

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import navLinks from './NavLinks';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScrollPage = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: scrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 0,
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        <Box sx={{ padding: '0 24px', background: '#EBEBEB', padding: '10px 0px' }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => router.push('/')}
            >
              <Image
                src="/Aone-InfoSystem-Logo.png"
                alt="Logo"
                width={90}
                height={40}
              />
            </Box>

            {/* Desktop Links */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
              }}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => handleScrollPage(link.path)}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 'bold',
                    margin: '0 16px',
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={toggleDrawer(true)}
            >
              <FiMenu size={24} />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} onClick={() => router.push(link.path)}>
                <ListItemText primary={link.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
