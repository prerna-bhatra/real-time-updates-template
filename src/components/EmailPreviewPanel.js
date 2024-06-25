import React from 'react';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const EmailPreviewPanel = () => {
  const emails = useSelector(state => state.email.emails);

  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden' ,border: '1px solid #ccc'  }}>
      {emails.map(email => (
        <div key={email.id} elevation={3} style={{ padding: '10px' }}>
          <Typography variant="h6" style={{ fontWeight: 700 }}>{email.sender}</Typography>
          <Typography variant="h6" style={{ fontWeight: 700 }}>{email.subject}</Typography>
          <Typography>{email.previewText}</Typography>
        </div>
      ))}
    </div>
  );
};

export default EmailPreviewPanel;
