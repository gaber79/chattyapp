import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    // console.log("Rendering <MessageList /> ");
    return (
      <div id="message-list">
        { this.props.messages.map((message) => {
            if (message.type === "incomingNotification") {
              return ( <div className="message system">{message.content}</div> )
            } else {
              return ( <Message
                key={message.id}
                username={message.username}
                content={message.content}
                /> )
            }
          })
        }
      </div>
    )
  }
}

export default MessageList;