import Table from 'react-bootstrap/Table';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {messages.map( (message, index) =>
                    <MessageItem key={message.id} {...message} msgNum={index+1} />
                )}
            </tbody>
        </Table>
    );
}

export default MessageList;