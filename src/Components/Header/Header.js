// 'use client'; 

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import navLinks from './NavLinks';

// const Header = () => {
//   const router = useRouter();

//   return (
//     <AppBar position="fixed" color="transparent" >
//       <Box sx={{ padding: '0 24px',background:'#fff', padding:'10px 0px ' }}>
//         <Toolbar
//           sx={{
//             justifyContent: 'space-between',
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

// export default Header;


'use client'; 

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import navLinks from './NavLinks';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  return (
    <AppBar position="fixed" color="transparent" >
      <Box sx={{ padding: '0 24px', background: '#fff', padding: '10px 0px' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => router.push('/')} // Redirect to home on logo click
          >
            <Image
              src={"/Aone-InfoSystem-Logo.png"} // Replace with the actual path to your logo
              alt="Logo"
              width={90}
              height={40}
             
            />
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

export default Header;
