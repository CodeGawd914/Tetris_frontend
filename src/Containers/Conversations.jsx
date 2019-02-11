import React from 'react'
import { ActionCable } from 'react-actioncable-provider'
import { API_ROOT } from '../Constants'
import NewConversationForm from '../Components/NewConversationForm'
import MessageArea from '../Components/MessageArea'
import Cable from '../Components/Cables'
import TetrisCanvas from '../Components/TetrisCanvas'
class Conversations extends React.Component {
  state = {
    conversations: [],
    activeConversation: null
  }

  componentDidMount(){
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(conversations =>
         this.setState({
        conversations
      }))
  }

  handleClick = id => {
    this.setState({
      activeConversation: id
    });
  };

  handleClick = id => {
    this.setState({
      activeConversation: id
    });
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversations });
  };

  render(){
  const { conversations, activeConversation } = this.state;
  return (
    <div className="conversationsList">
      <ActionCable
        channel={{ channel: 'ConversationsChannel' }}
        onReceived={this.handleReceivedConversation}
      />
      {this.state.conversations.length ? (
        <Cable
          conversations={conversations}
          handleReceivedMessage={this.handleReceivedMessage}
        />
      ) : null}
      <TetrisCanvas/>
      <h2>Conversations</h2>
      <ul>{mapConversations(conversations, this.handleClick)}</ul>
      <NewConversationForm />
      {this.state.activeConversation ? (
        <MessageArea
          user={this.props.user}
          conversation={findActiveConversation(
            conversations,
            activeConversation
          )}
        />
      ) : null}
    </div>
  );
};
}
export default Conversations

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick) => {
  return conversations.map(conversation => {
    return (
      <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </li>
    );
  });
};
