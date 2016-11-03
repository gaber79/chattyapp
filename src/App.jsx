import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  updateMessages(messagevalue) {
    const newMessage = {id:(this.state.messages.length +1), username: this.state.currentUser.name, content: messagevalue }
    
    // this.setState({messages: this.state.messages.concat(newMessage)})
    this.socket.send(JSON.stringify(newMessage))
  }

  updateName(name)
  {
    this.setState({currentUser: { name }});
  }

  componentDidMount() {
    console.log("componentDidMount <App />")
    this.socket = new WebSocket ('ws://localhost:4000/')

    this.socket.onopen = function(event) {
      console.log("connected to server!");
    }
  }



  render() {
    console.log("Rendering <app />")
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar userName={this.state.currentUser.name} updateName={this.updateName.bind(this)} updateMessages={this.updateMessages.bind(this)} messages={this.state.messages} />
      </div>
    );
  }
}
export default App;
