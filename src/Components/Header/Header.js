// 'use client'; 

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Box from '@mui/material/Box';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import navLinks from './NavLinks';
// import Image from 'next/image';

// const Header = () => {
//   const router = useRouter();

//   return (
//     <AppBar position="fixed" color="transparent" sx={{
//       boxShadow:0,
//     }} >
//       <Box sx={{ padding: '0 24px', background: '#fff', padding: '10px 0px' }}>
//         <Toolbar
//           sx={{
//             justifyContent: 'space-between',
//           }}
//         >
//           <Box
//             sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
//             onClick={() => router.push('/')} 
//           >
//             <Image
//               src={"/Aone-InfoSystem-Logo.png"} 
//               alt="Logo"
//               width={90}
//               height={40}
             
//             />
//           </Box>

//           <Box>
//             {navLinks.map((link, index) => (
//               <Link
//                 key={index}
//                 href={link.path}
//                 style={{
//                   textDecoration: 'none',
//                   color: 'black',
//                   fontWeight: 'bold',
//                   margin: '0 16px',
//                 }}
//               >
//                 {link.title}
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </Box>
//     </AppBar>
//   );
// };

// export default Header;

'use client';

import React, { useState } from 'react';
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
import { FiMenu } from 'react-icons/fi'; // Importing menu icon

const Header = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: 0 }}>
        <Box sx={{ padding: '0 24px', background: '#fff', padding: '10px 0px' }}>
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
                display: { xs: 'none', md: 'flex' }, // Hide on small screens
                alignItems: 'center',
              }}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
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
              sx={{ display: { xs: 'flex', md: 'none' } }} // Show only on small screens
              onClick={toggleDrawer(true)}
            >
              <FiMenu size={24} /> {/* Using React Icon */}
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
