import React from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const OuterBorder = styled(Paper)({
  padding: 16,
  width: 350,
  height: 600,
  borderRadius: 20,
  position: 'relative',
  backgroundColor: '#f1f1f1',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const InnerBorder = styled(Box)({
  width: '100%',
  height: '100%',
  borderRadius: 20,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ffffff',
  boxShadow: '0px 0px 5px rgba(0,0,0,0.1)',
  position: 'relative',
});

const Notch = styled(Box)({
  width: '60px',
  height: '20px',
  backgroundColor: '#f1f1f1',
  borderRadius: '10px 10px 0 0',
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
});

const EmailPreview = ({ subject, sender = 'The Green Yoga', time = '5:45 PM' }) => {
  return (
    <OuterBorder>
      <InnerBorder>
        <Notch />
        <Box sx={{ backgroundColor: '#ededed', padding: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #ddd' }}>
          <Typography variant="caption" color="textSecondary">9:47</Typography>
        </Box>
        <Box sx={{ padding: 2, flexGrow: 1 }}>
          <Typography variant="subtitle1" fontWeight="bold">Inbox</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <Avatar sx={{ bgcolor: 'blue', marginRight: 1 }}>A</Avatar>
            <Box>
              <Typography variant="body1" fontWeight="bold">{sender}</Typography>
              <Typography variant="body2" color="textSecondary">{subject}</Typography>
              <Typography variant="caption" color="textSecondary">{time}</Typography>
            </Box>
          </Box>
          {/* Add more email items similarly */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <Avatar sx={{ bgcolor: 'grey', marginRight: 1 }}>B</Avatar>
            <Box>
              <Typography variant="body1" fontWeight="bold">The Green Yoga</Typography>
              <Typography variant="body2" color="textSecondary">Free email marketing course</Typography>
              <Typography variant="caption" color="textSecondary">Sep 6</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <Avatar sx={{ bgcolor: 'purple', marginRight: 1 }}>C</Avatar>
            <Box>
              <Typography variant="body1" fontWeight="bold">Brevo Academy</Typography>
              <Typography variant="body2" color="textSecondary">Try the new drag & drop editor</Typography>
              <Typography variant="caption" color="textSecondary">Sep 5</Typography>
            </Box>
          </Box>
        </Box>
      </InnerBorder>
    </OuterBorder>
  );
};

export default EmailPreview;
