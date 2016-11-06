import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {

  getMessages(prop) {
    this.prop.messages.map((message) =>{

    })
  }
  render() {
    // console.log("Rendering <MessageList /> ");
    return (
      <div id="message-list">
        
        {this.props.messages.map((message) => {
            return <Message
              key={message.id}
              username={message.username}
              content={message.content}
              />


        //       <span className="username">Anonymous1</span>
        // <span className="content">I won't be impressed with technology until I can download food.</span>
          })
          }
      </div>
    )
  }
}

export default MessageList;