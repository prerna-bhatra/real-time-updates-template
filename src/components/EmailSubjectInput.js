import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { setEmailSubject, setPreviewText, addEmail, setSender } from '../redux/emailSlice';
import { Button, TextareaAutosize } from '@mui/material';
import './EmailSubjectInput.css'; // Import the CSS file

const EmailSubjectInput = () => {
  const emails = useSelector(state => state.email.emails);
  console.log({ emails });

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
    dispatch(addEmail({ subject, previewText, sender }));
  };

  return (
    <div>
      <div>
        <TextareaAutosize
          value={sender}
          onChange={handleSenderChange}
          fullWidth
          variant="outlined"
          margin="normal"
          className="textarea"
        />
      </div>

      <div>
        <TextareaAutosize
          label="Email Subject"
          value={subject}
          onChange={handleSubjectChange}
          fullWidth
          variant="outlined"
          margin="normal"
          className="textarea"
        />
      </div>

      <div>
        <TextareaAutosize
          label="Preview Text"
          value={previewText}
          onChange={handlePreviewTextChange}
          fullWidth
          variant="outlined"
          margin="normal"
          className="textarea"
        />
      </div>

      <div className="add-email-button-container">
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAddEmail}
          className=""
        >
          Add Email
        </Button>
      </div>

    </div>
  );
};

export default EmailSubjectInput;
