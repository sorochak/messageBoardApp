import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";
import { useState } from 'react';
import axios from 'axios';

const MessageFormAndList = ({ jsonData }) => {

    const [messages, setMessages] = useState(jsonData);


    // function called by Formik to pass data from the Form
    const addNewMessage = async (values) => {
        //values.id = messages.length;

        try {

            const { data } = await axios.post('http://10.21.75.41:3004/api/messages', values);
            setMessages( [data, ...messages] );

        } catch(error) {
            console.log(error);
        }

        
        //messages.unshift(values);
        //console.log(values);
        //console.log(messages);
    }

    return (
        <>
            <NewMessageForm addNewMessage={addNewMessage} />
            <MessageList messages={messages}/>
        </>
    )
}

export default MessageFormAndList;