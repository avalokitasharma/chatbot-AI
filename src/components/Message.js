import React from 'react';
import response from './Response.js';

class Message extends React.Component {

	state = {showOptions: true};

	onOptionSelect = (option) => {
		
		this.setState({showOptions: false});

		this.props.onSelectOption({
			msg: option.label,
			options:null,
			type:'user'
		});
		this.props.onSelectOption({
			msg:response[option.value].msg,
			options:response[option.value].options,
			type:'bot'
		})
	};

	hideOptions = () => {
		this.setState({showOptions: false});
	};

	scrollToBottom = () => {
	    const { messageBody } = this.refs;
	    messageBody.scrollIntoView({behavior: "smooth", block: "end",inline:"nearest"});
 	}
	componentDidMount() {
		
		this.scrollToBottom();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	render() {
		const {type, message} = this.props;
		
		let renderOptions = null;
		if(type === 'bot'){
			renderOptions = message.options.map(option => {
				return (
					<div 
						className="ui button small options clearfix"
						key={option.value} 
						onClick={() => this.onOptionSelect(option)}
					>
						{option.label}
					</div>
				);
			})
		}

		return (
			<div ref="messageBody" >
				<div className={`ui message msg ${type === 'bot'?'bot-message':'user-message'} `}>
					{message.msg}
				</div><br/>
				{ (this.state.showOptions) &&
					<div msgRef="messageElement" className="clearfix">{renderOptions}</div>
				}
			</div>
		);
	}	
}
export default Message;

 