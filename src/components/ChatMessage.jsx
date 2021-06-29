import React from 'react';

/**
   * Renders a <ChatMessage /> component
   * @param  props
   * @param  props.text - the text in the message
*/

export default function ChatMessage(props) {
  const { user, text, uid, photoURL, createdAt } = props.message;

  return (
    <div className="message">
      <div>
        <img src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} alt="{user}'s pfp" />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}