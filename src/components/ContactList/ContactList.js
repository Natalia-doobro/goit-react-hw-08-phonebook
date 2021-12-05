import PropTypes from "prop-types";
import { useEffect } from "react";
import authSelectors from '../../redux/auth/auth-selectors'
import Loader from "../../components/Loader"
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contact/contact-aperations';
import {
  getVisibleContacts,
} from '../../redux/contact/contact-selectors';
import s from "./ContactList.module.css";

const ContactList = ({ contact, getContact, error}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const loading = useSelector(getLoader);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
     {isLoggedIn ?
      (contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}</p>
          <p className={s.number}>{number}</p>
          <button
            type="button"
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Удалить
          </button>
        </li>
      ))
      ):(<h1>no authorization</h1>)} 
      {error && <h1>Error: {error}</h1>}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelite: PropTypes.func,
};

export default ContactList;
