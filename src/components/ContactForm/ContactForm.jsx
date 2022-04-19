import { useState } from 'react';
import { Phonebook, LabelName, InputContact, AddContact } from './ContactForm.styled';
export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  return (
      <Phonebook onSubmit={handleSubmit}>
        <LabelName>
          Name
          <InputContact
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelName>

        <LabelName>
          Number
          <InputContact
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelName>

        <AddContact type='submit'>Add contact</AddContact>
      </Phonebook>
    );
}