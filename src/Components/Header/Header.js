// 'use client';

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import navLinks from './NavLinks';

// const Navbar = () => {
//   const router = useRouter();

//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Box sx={{ padding: '0 24px'  ,border: '1px solid black'}}> 
//         <Toolbar
//           sx={{
//             justifyContent: 'space-between'
//           }}
//         >
//           {/* Logo */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{ fontWeight: 'bold', cursor: 'pointer' }}
//               onClick={() => router.push('/')}
//             >
//               <span style={{ color: 'red', fontWeight: 'bold' }}>
//                 Info<span style={{ fontSize: 'small', color: 'black' }}>System</span>
//               </span>
//             </Typography>
//           </Box>

//           {/* Menu Links */}
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

// export default Navbar;


'use client';  // Make sure this is added at the top

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import navLinks from './NavLinks';

const ResponsiveAppBar = () => {
  const router = useRouter();

  return (
    <AppBar position="fixed" color="transparent" >
      <Box sx={{ padding: '0 24px',background:'#fff' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => router.push('/')}
            >
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                Info<span style={{ fontSize: 'small', color: 'black' }}>System</span>
              </span>
            </Typography>
          </Box>

          {/* Menu Links */}
          <Box>
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
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default ResponsiveAppBar;
