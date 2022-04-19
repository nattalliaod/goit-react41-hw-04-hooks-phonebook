import { nanoid } from 'nanoid';
import { useState } from "react";

import { useLocalStorage } from '../hooks/localStorage';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './Container/Container';
import { MainText, Text } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
  setFilter( e.currentTarget.value)
  }
  
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  return (
    <>
      <Container>
        <MainText>Phonebook</MainText>
        <ContactForm onSubmit={addContact} />
      </Container>

      <Container>
        <Text>Contacts</Text>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />
      </Container>
    </>
  );
};
