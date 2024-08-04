import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';

// import { refreshUser } from '../redux/auth/operations';

import { selectIsRefreshing } from '../../redux/auth/selectors';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

export const App = () => {
  // const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <Layout>
  //     <Routes>
  //       <Route path="/" element={<HomePage />} />
  //       <Route path="/contacts" element={<ContactsPage />} />
  //       <Route
  //         path="/register"
  //         element={
  //           <RestrictedRoute
  //             redirectTo="/contacts"
  //             component={<RegisterPage />}
  //           />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
  //         }
  //       />
  //       <Route
  //         path="/contacts"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
  //         }
  //       />
  //     </Routes>
  //   </Layout>
  // );

return  (
   
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route
          path="/register"
          element={
           <RegisterPage />}
            />
        
        <Route
          path="/login"
          element={
            <LoginPage />} />
         
       
      
      </Routes>
    </Layout>
  );
  
};

// CONTACT LIST

// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactForm from '../ContactForm/ContactForm';
// import BarLoader from 'react-spinners/BarLoader';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { fetchContacts } from '../../redux/contactsOps';
// import { fetchContacts } from '../../redux/contacts/operations';
// // import { selectIsLoaded, selectIsError} from '../../redux/contactsSlice';
// import { selectIsLoaded, selectIsError} from '../../redux/contacts/selectors';
// import css from './App.module.css';

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

export default App;
