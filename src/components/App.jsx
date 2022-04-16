
import { nanoid } from 'nanoid';
import { Component } from "react";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './Container/Container';
import { MainText, Text } from './App.styled';

export class App extends Component{
  state = {
    contacts:  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
   filter: '', 
  };

   componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const prevContact = prevState.contacts;

    if (contacts !== prevContact) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = newContact => {
    const findName = this.state.contacts
    .map(contact => contact.name)
    .includes(newContact.name);
  
    if (findName) { alert(`${newContact.name} is already in contacts.`); return };
    
    const contact = {
      ...newContact,
      id: nanoid(),
      
    };  

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
        
  };

  deleteContact = contactId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  }

  changeFilter = e => {
  this.setState({filter: e.currentTarget.value})
  }
  
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }
  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Container>
          <MainText>Phonebook</MainText>
          <ContactForm onSubmit={this.addContact} />
        </Container>

        <Container>
          <Text>Contacts</Text>
          <Filter value={filter} onChange={this.changeFilter}/>
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </Container>
      </>
    );
  }
};
