import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumbere] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumbere(value);
        break;

      default:
        break;
    }
  };

  const checkContactAdd = name => {
    let normolizeName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normolizeName);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let contact = {
      id: nanoid(),
      name,
      number,
    };
    if (checkContactAdd(contact.name)) {
      alert(`${name} already added`);
      reset();
      return;
    }

    dispatch(addContact(contact));

    reset();
  };
  const reset = () => {
    setName('');
    setNumbere('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
