import React from 'react';
import { sendMessage } from '../services/chatService.js';

/**
   * Renders a <SendMessageForm /> component
*/

function SendMessageForm() {
  const [formValue, setFormValue] = React.useState('');

  function onSendMessage(e) {
    e.preventDefault();
    sendMessage(formValue);
    setFormValue('');
  }

  return (
    <form className="send-message-form" onSubmit={onSendMessage}>
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
