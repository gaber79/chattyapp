import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    console.log("Rendering <MessageList /> ");
    return (
      <div id="message-list">
        <Message />

      </div>
      )
  }
}

export default MessageList;