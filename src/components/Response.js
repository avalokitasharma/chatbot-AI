const response = {
			start:{
				msg: "Hi, I am Nile! Our product is standout example of tech-enabled disruption. Would you like to know more?",
				options: [
					{value:'first', label:'more information'},
					{value:'second',label:'maybe'},
					{value:'third',label:'interested'}
					],
				type:'bot'
			},
			first:{
				msg: "Artificial intelligence and Learning-based core regulatory engine helps businesses scale faster, reduce cost and cut turnaround time.",
				options: [
					{value:'one', label:'more info'},
					{value:'two',label:'why us'}
					],
				type:'bot'
			},
			second:{
				msg: "Simulating human intelligence to offer an Intelligent Process Automation (IPA) in business processing.",
				options: [{value:'first', label:'more information'}],
				type:'bot'
			},
			third:{
				msg: "Simulating human intelligence to offer an Intelligent Process Automation (IPA) in business processing.",
				options: [{value:'first', label:'more information'}],
				type:'bot'
			},
			one:{
				msg: "our image and video fraud checks ensure your systems remain safe from digital frausters",
				options: [{value:'start',label:'interested in more info'},],
				type:'bot'
			},
			two:{
				msg: 'Security and privacy is our priority',
				options: [{value:'start',label:'interested in more info'}],
				type:'bot'
			},
			other:{
				msg: 'I did not understand your query',
				options: [
					{value:'first', label:'more information'},
					{value:'start',label:'Not needed'}
					],
				type:'bot'
			},
			end:{
				msg: 'Red',
				options: [{value:'start',label:'Hi, How can I help you?'}],
				type:'bot'
			}
		};

export default response;