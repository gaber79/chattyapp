import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const keyPressed = e.which;
    const msg = e.target.value;
    if (keyPressed === 13) {
    console.log("doing submit", e)
      this.props.updateMessages(msg);
    }
  }

  onNameChange(e) {
    const keyPressed = e.which;
    const newName = e.target.value;
    if (keyPressed === 13) {
      console.log('do a name update');
      this.props.submitName(newName);
    }
    this.props.updateName(newName);    
  }

  render() {

    return (
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)"  onChange={ this.onNameChange.bind(this) } onKeyDown={ this.onNameChange.bind(this) }  />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" onKeyUp={ this.handleSubmit } value={this.props.messages.content} />
      </footer>
      );
  }
}

export default ChatBar;