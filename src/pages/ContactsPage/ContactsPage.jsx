
// CONTACT LIST

import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import BarLoader from 'react-spinners/BarLoader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../../redux/contactsOps';
import { fetchContacts } from '../../redux/contacts/operations';
// import { selectIsLoaded, selectIsError} from '../../redux/contactsSlice';
import { selectIsLoaded, selectIsError} from '../../redux/contacts/selectors';
import css from './ContactsPage.module.css';

// function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoaded);
//   const isError = useSelector(selectIsError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={css.appWraper}>
//       <h1 className={css.appTitle}>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {isLoading && <div className={css.appLoader}> <BarLoader /> </div>}
//       {isError && <p>There is a mistake plese reload the page</p>}
//       <ContactList />
//     </div>
//   );
// }




export default function ContactsPage () {
      const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoaded);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
     return (
    <div className={css.appWraper}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <div className={css.appLoader}> <BarLoader /> </div>}
      {isError && <p>There is a mistake plese reload the page</p>}
      <ContactList />
    </div>
  );
}