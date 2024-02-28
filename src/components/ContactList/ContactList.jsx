import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.contact.filter);
  const filterList = contacts.filter(fil =>
    fil.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filterList.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </>
  );
}
