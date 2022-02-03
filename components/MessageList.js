import Table from 'react-bootstrap/Table';
import MessageItem from 'MessageItem';

const MessageList = () => {


    const messages = [
        {
            id: 0,
            name: "Bill",
            msgText: "I don't know. Philosophize with him!",
        },
        {
            id: 1,
            name: "Ted",
            msgText: "All we are is dust in the wind, dude.",
        },
        {
            id: 2,
            name: "Soldier",
            msgText: "Are you suggesting coconuts migrate?",
        },
        {
            id: 3,
            name: "The Black Knight",
            msgText: "Just a flesh wound.",
        },
        {
            id: 4,
            name: "God",
            msgText: "Course it's a good idea!",
        },
        {
            id: 5,
            name: "Hunter S. Thompson",
            msgText: "Too weird to live, too rare to die!",
        },
    ];

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