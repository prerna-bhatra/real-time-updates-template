import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MobileView = () => {
  return (
    <Paper elevation={3} sx={{ width: 300, borderRadius: '40px 40px 0 0', overflow: 'hidden' }}>
      <Box sx={{ backgroundColor: 'lightgray', height: '150px', position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '30px',
            backgroundColor: 'white',
            borderBottom: '1px solid black',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderRadius: '0 0 50px 50px',
          }}
        />
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="body1" fontWeight="bold">The Green Yoga</Typography>
        <Typography variant="body2" color="textSecondary">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Typography>
        <Typography variant="h6" sx={{ marginTop: 1 }}>Hi </Typography>
      </Box>
    </Paper>
  );
};

export default MobileView;
