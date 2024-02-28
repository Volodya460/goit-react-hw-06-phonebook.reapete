import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from '../../redux/contactSlice';

export function Filter() {
  const value = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Find Contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={e => {
          dispatch(filterChange(e.target.value.trim()));
        }}
        name="filter"
      ></input>
    </>
  );
}
