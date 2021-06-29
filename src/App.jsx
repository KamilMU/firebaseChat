import React from 'react';
import SendMessageForm from './components/SendMessageForm.jsx';
import ChatMessage from './components/ChatMessage.jsx';
import { db } from './services/firebase.js';

/**
   * Renders a <App /> component
*/

function App() {
  const [messages, setMessages] = React.useState();

  React.useEffect(() => {
    return db.collection('messages').onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));

      setMessages(postData);
    });
  }, []);

  return (
    <div className="app">
      <div className="messages">
        {messages && messages.map((msg, index) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </div>
      <SendMessageForm />
    </div>
  )
}

export default App