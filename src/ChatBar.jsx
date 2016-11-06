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
    // console.log(e.target.value)
      // console.log('msg', typeof msg);
      // if (!msg) return;
      this.props.updateMessages(msg);
    }
  }

  onNameChange(e)
  {
    // console.log('on namechange key', e.which);
    const keyPressed = e.which;
    const newName = e.target.value;
    if (keyPressed === 13) {
      console.log('do a name update');
      this.props.submitName(newName);
    }
    this.props.updateName(newName);

    // this.props.updateName(e.target.value);
    
  }

  // handleNameSubmit(e) {
      
  //     this.props.submitName(e.target.value);
    
  // }

  // onNewMessage(e) {
  //   this.props.updateMessages(e.target.value);
  // }

  render() {
    // value={this.props.userName}
    // console.log("Rendering <ChatBar /> ");
    // onBlur={this.handleNameSubmit.bind(this)}
    return (
      <footer>
        <input id="username" type="text" placeholder="Your Name (Optional)"  onChange={ this.onNameChange.bind(this) } onKeyDown={ this.onNameChange.bind(this) }  />
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" onKeyUp={ this.handleSubmit } value={this.props.messages.content} />
      </footer>
      );
  }
}

export default ChatBar;