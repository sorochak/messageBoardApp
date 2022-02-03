import NewMessageForm from "./NewMessageForm";
import MessageList from "./MessageList";

const MessageFormAndList = () => {

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

    // function called by Formik to pass data from the Form
    const addNewMessage = (values) => {
        values.id = messages.length;
        messages.unshift(values);
        console.log(values);
        console.log(messages);
    }

    return (
        <>
            <NewMessageForm addNewMessage={addNewMessage} />
            <MessageList messages={messages}/>
        </>
    )
}

export default MessageFormAndList;