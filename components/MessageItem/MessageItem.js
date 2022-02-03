const MessageItem = ({ id, name, msgText }) =>
            <tr>
                <td>{id + 1}</td>
                <td>{name}</td>
                <td>{msgText}</td>
            </tr>

export default MessageItem;