import { ContactList } from './ContactList/ContactList';
import Form from './Form/Form';
import { Section } from './section';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from '../Hooks/useLocalStorage';

export default function App() {
  return (
    <>
      <Section title="PhoneBook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
