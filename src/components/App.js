import React from 'react';
import Chat from './Chat.js';
import logo from '../img/chatbot.jpg';
import './App.css';

class App extends React.Component {
	state = {	
				showChat: false,
				messages:[
					{
						msg: 'Hi, I am Nile! Our product is standout example of tech-enabled disruption. Would you like to know more?',
						options: [
								{value:'first', label:'more information'},
								{value:'second',label:'maybe'},
								{value:'third',label:'interested'}
							],
						type:'bot'
					}
				]
			};

	onTextSubmit = (msg) => {

		let newMessages = this.state.messages;
		newMessages.push(msg);
		
		this.setState({messages: newMessages});
	}

	render() {
		const showChatBox = this.state.showChat;
		return (
			<div>
				 <header>
		            <div className="hero-text-box">
		                <h1>Enhanced user experience.<br/>Scalable backend operations.</h1>
		            </div>      
		        </header>
				{ showChatBox &&
					<div className="chat-container">
						<Chat 
							messages={this.state.messages} 
							onSelectOption={this.onTextSubmit}
						/>
					</div>
				}
				<a 
					href="#"
					onClick={e => this.setState({showChat: !this.state.showChat})}
				>
					<img src={logo} alt="Chatbot" className="logo" />
				</a>
			</div>
		);
	}	
}
export default App;