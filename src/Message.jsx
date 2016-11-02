import React from 'react';

class Message extends React.Component {
  render() {
    console.log("Rendering <Message /> ");
    return (
      <div id="message">
        <div className="message">
        <span className="username">{this.props.username} </span>
        <span className="content">{this.props.content} </span>
        </div>
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </div>
      )
  }
}

export default Message;