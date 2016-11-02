import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if(event.key === 'Enter') {
    // console.log(event.target.value)
    this.props.updateMessages(event.target.value)
    }
  }

  onNameChange(e)
  {
    this.props.updateName(e.target.value);
  }

  // onNewMessage(e) {
  //   this.props.updateMessages(e.target.value);
  // }

  render() {
    console.log("Rendering <ChatBar /> ");
    return (
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)" value={this.props.userName} onChange={this.onNameChange.bind(this)} />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" onKeyUp={this.handleSubmit} value={this.props.messages.content} />
      </footer>
      );
  }
}

export default ChatBar;