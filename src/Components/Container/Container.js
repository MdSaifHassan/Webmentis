import { Box } from "@mui/material";

export default function MyContainer({ children }) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        padding: '0 10px',  
        margin: '0 auto',  
        boxSizing: 'border-box', 
        '@media (max-width: 600px)': {
          padding: '0 10px', 
        },
      }}
    >
      {children} 
    </Box>
  );
}
