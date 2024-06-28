// components/App.js
import React from 'react';
import Grid from '@mui/material/Grid';
import EmailSubjectInput from './components/EmailSubjectInput';
import EmailPreviewPanel from './components/EmailPreviewPanel';
import { Box, Typography } from '@mui/material';

import "./App.css"
import MobileView from './components/MobileView';

const App = () => {
  return (
    <Grid container spacing={2} paddingX={60} paddingY={5}>
      <Grid item xs={6} className='subject-panel-container'>
        <Box mb={2}>
          <Typography variant="h5">Subject</Typography>
          <Typography variant="h6">Add a subject line for this variant</Typography>
        </Box>
        <EmailSubjectInput />
      </Grid>
      <Grid item xs={6} container alignItems="flex-start" marginTop={10}>
        {/* <EmailPreviewPanel /> */}
        <MobileView/>
      </Grid>
    </Grid>
);
};

export default App;
