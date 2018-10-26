import React from 'react';
import HiddenMessage from './hidden-message';
//import HiddenMessage from './hidden-message2';

class HiddenMessages extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
           messages: [
               'I love React',
               'I learnt Vue',
               'I do alternative technologies'
           ],
           showing: -1
        };
    }
    componentWillMount(){        
        this.interval = setInterval( () => {
            let  {showing, messages} = this.state;
            showing = (++showing >= messages.length)? -1 : showing;
            this.setState({showing});
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        const {messages, showing} = this.state;
        return (
            <div className="hidden-messages">
                {
                    messages.map((message, i) => 
                        <HiddenMessage key={i} hide={(showing !== i)}> 
                               {message}
                        </HiddenMessage> 
                    )
                }
            </div>
        )
    }
}

export default HiddenMessages;