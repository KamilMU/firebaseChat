import React from 'react';
import firebase from 'firebase/app';

/**
   * Renders a <SendMessageForm /> component
*/

function SendMessageForm() {
  const [formValue, setFormValue] = React.useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await firebase.firestore().collection('messages').doc().set({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setFormValue('');
  }

  return (
    <form className="send-message-form" onSubmit={sendMessage}>
      <input
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        placeholder="Say something"
        autoFocus
      />
      <button
        type="submit"
        disabled={!formValue}>
        send
      </button>
    </form>
  )
}

export default SendMessageForm;
