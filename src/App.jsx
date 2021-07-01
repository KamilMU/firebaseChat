import React from 'react';
import SendMessageForm from './components/SendMessageForm.jsx';
import ChatMessage from './components/ChatMessage.jsx';
import { getMessages } from './services/chatService.js';

/**
   * Renders a <App /> component
*/

function App() {
  const [messages, setMessages] = React.useState();

  React.useEffect(() => {
    getMessages(setMessages);
  }, []);

  return (
    <div className="app">
      <header>
        <div>Chat 🔥🔥🔥</div>
      </header>
      <div className="messages">
        {messages && messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </div>
      <SendMessageForm />
    </div>
  )
}

export default App;
