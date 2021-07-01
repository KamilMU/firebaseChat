import React from 'react';

/**
   * Renders a <ChatMessage /> component
   * @param  props
   * @param  props.text - the text in the message
*/

export default function ChatMessage(props) {
  const { text } = props.message;

  return (
    <div className="message">
      <div>
        <img src={'https://i.imgur.com/T0pqiNy.png'} alt="avatar" />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}