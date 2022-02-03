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
                {messages.map(message =>
                    <MessageItem key={message.id} {...message} />
                )}
            </tbody>
        </Table>
    );
}

export default MessageList;