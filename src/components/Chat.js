import React from 'react';
import Message from './Message.js';
import response from './Response.js';

class Chat extends React.Component {

	constructor(props) {
	    super(props);
	    this.msgRef = React.createRef();
	  }

	state = {userText: ''};

	onFormSubmit = event => {

		event.preventDefault();
		this.msgRef.current.hideOptions();

		this.props.onSelectOption({
			msg: this.state.userText,
			options:null,
			type:'user'}
		);
		this.props.onSelectOption({
			msg: 'I did not understand your query',
			options: [
				{value:'first', label:'more information'},
				{value:'start',label:'Not needed'}
				],
			type:'bot'}
		);
		this.setState({userText: ''});
	}

	render() {
		
		const renderMessages = this.props.messages.map(msg => {
			return (
					<Message 
						type={msg.type} 
						message={msg} 
						onSelectOption={this.props.onSelectOption}
						ref={this.msgRef}
					/>
				);
		});

		return (
			<div>
				<div className="message-container">
					{renderMessages}
				</div>
				<div className="input-container">
					<form className="ui form input-container" onSubmit={this.onFormSubmit}>
							<div className="field">
								<input 
									type="text" 
									value={this.state.userText}
									placeholder="Type your message.."
									onChange={e => this.setState({userText:e.target.value})}
								/>
							</div>
					</form>
				</div>
				
			</div>
		);
	}	
}
export default Chat;