import { useDispatch } from 'react-redux';
import { deletContact } from '../../redux/contactSlice';

export function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul key={id}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button
        type="button"
        onClick={() => {
          dispatch(deletContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
}
