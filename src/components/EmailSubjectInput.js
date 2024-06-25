import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { setEmailSubject, setPreviewText, addEmail, setSender } from '../redux/emailSlice';
import { Button } from '@mui/material';

const EmailSubjectInput = () => {
  const emails = useSelector(state => state.email.emails);
  console.log({ emails })

  const dispatch = useDispatch();
  const subject = useSelector(state => state.email.emails[0].subject);
  const sender = useSelector(state => state.email.emails[0].sender);
  const previewText = useSelector(state => state.email.emails[0].previewText);

  const handleSubjectChange = (e) => {
    dispatch(setEmailSubject({ id: 0, subject: e.target.value }));
  };

  const handlePreviewTextChange = (e) => {
    dispatch(setPreviewText({ id: 0, previewText: e.target.value }));
  };

  const handleSenderChange = (e) => {
    dispatch(setSender({ id: 0, sender: e.target.value }));
  };


  const handleAddEmail = () => {
    dispatch(addEmail({ subject, previewText , sender }));
  };

  return (
    <>
      <TextField
        label="Email Sender"
        value={sender}
        onChange={handleSenderChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <TextField
        label="Email Subject"
        value={subject}
        onChange={handleSubjectChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Preview Text"
        value={previewText}
        onChange={handlePreviewTextChange}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleAddEmail}
      >
        Add Email
      </Button>
    </>
  );
};

export default EmailSubjectInput;
