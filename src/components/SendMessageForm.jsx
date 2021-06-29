import React from 'react';
import firebase from 'firebase/app';

/**
   * Renders a <SendMessageForm /> component
*/

function SendMessageForm() {
  const [formValue, setFormValue] = React.useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await firebase.firestore().collection('messages').add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <form className="send-message-form" onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
      <button type="submit" disabled={!formValue}>send</button>
    </form>
  )
}

export default SendMessageForm;
