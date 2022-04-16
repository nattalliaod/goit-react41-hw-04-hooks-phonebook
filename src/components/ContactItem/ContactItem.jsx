import { ContactName, ContactNumber, ContactDelete } from "./ContactItem.styled"

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <>
            <ContactName>{name}:
                <ContactNumber href={`tel:${number}`}> {number}</ContactNumber>
            </ContactName>
            <ContactDelete type='button' onClick={() => onDeleteContact(id)}>Delete</ContactDelete>
        </>
    )
}