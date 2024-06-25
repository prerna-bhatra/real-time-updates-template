import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emails: [
    {
      id:0,
      sender:"The new yoga",
      subject:"Unlock your true potential",
      previewText:"This is body"
    },
    {
      id:1,
      sender:"Brevo Academy",
      subject:"Free Email marketing course ",
      previewText:"Learn how to make email marketing statrgy"
    },
    
    {
      id:2,
      sender:"Brevo Editor",
      subject:"Try the new drag and drop",
      previewText:"Learn how to save time and build beautful email"
    }
  ],
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    addEmail: (state, action) => {
      console.log(action)
      state.emails.push({
        id: state.emails.length,
        subject: action.payload.subject || '',
        previewText: action.payload.previewText || '',
        sender: action.payload.sender || '',
      });
    },
    setEmailSubject: (state, action) => {
      const { id, subject } = action.payload;
      console.log({id , subject})
      const email = state.emails.find(email => email.id === id);
      if (email) {
        email.subject = subject;
      }
    },
    setPreviewText: (state, action) => {
      const { id, previewText } = action.payload;
      const email = state.emails.find(email => email.id === id);
      if (email) {
        email.previewText = previewText;
      }
    },
    setSender: (state, action) => {
      const { id, sender } = action.payload;
      const email = state.emails.find(email => email.id === id);
      if (email) {
        email.sender = sender;
      }
    },
  },
});

export const {
  addEmail,
  setEmailSubject,
  setPreviewText,
  setSender,
} = emailSlice.actions;

export default emailSlice.reducer;
