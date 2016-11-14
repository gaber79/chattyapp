import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
import uuid from 'node-uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: "Jack" },
      messages: [],
      usersOnline: 0

    }
  }

  updateMessages(messagevalue) {
    const newMessage = { type: 'postMessage', username: this.state.currentUser.name, content: messagevalue }
    this.socket.send(JSON.stringify(newMessage))
  }

  updateName(name)
  {
    // console.log('name in updateName', name);
    // this.state.currentUser.name = name;
    // this.forceUpdate();
  }

  submitName(name) {

    const oldName = this.state.currentUser.name;
    const newName = name;
    this.setState({currentUser: { name }});

    const userId = this.state.currentUser.userId;
    const payload = JSON.stringify({
      type: 'NAME_UPDATE', 
      content: oldName + ' has changed their name to ' + name +'.',
      });
    console.log('gonna send this to server', payload);

    this.socket.send(payload);

  }

  componentDidMount() {
    // console.log("componentDidMount <App />")
    this.socket = new WebSocket ('ws://localhost:4000/')
    
    this.socket.onopen = (event) => {
      console.log("connected to server!");    
    }
    
    this.socket.onmessage = (event) => {
      console.log("event", event)
      var message = JSON.parse(event.data);
      console.log("message", message)
      console.log(message.userCount)
      var newCount = message.userCount
      this.setState({ usersOnline: newCount})
      this.setState({ messages: this.state.messages.concat(message)})
    }
  }



  render() {
    // console.log("Rendering <app />")
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
          <h2> {this.state.usersOnline} Users Online</h2>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar userName={this.state.currentUser.name} updateName={ this.updateName.bind(this) } submitName={this.submitName.bind(this)} updateMessages={this.updateMessages.bind(this)} messages={this.state.messages} />
      </div>
    );
  }
}
export default App;
