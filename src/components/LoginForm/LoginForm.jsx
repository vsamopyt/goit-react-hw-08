import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const initialValues = {
  // name: '',
  email: '',
  password: "",
};

// const contacFormSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(6, 'too short')
//     .max(100, 'too Long')
//     .required('Required'),
//   number: Yup.string().length(9, 'should be 9 ').required('Required'),
// });

const contacFormSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(6, 'too short')
//     .max(100, 'too Long')
//     .required('Required'),
    email: Yup.string().email('must be a valid email').required('Required'),
    // password: Yup.string().matches("[A-Z]", "ssss").required('Required'),
      password: Yup.string().matches("(?=.*[0-9])","must have at least one number").required('Required'),
//   email: Yup.string().length(9, 'should be 9 ').required('Required'),
});


export default function LoginForm() {
//   const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(login(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contacFormSchema}
    >
      <Form className={css.contactFormWraper}>
        {/* <label className={css.contactFormLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage name="name" component="span" /> */}
        <label className={css.contactFormLabel} htmlFor={emailId}>
          Email
        </label>
        <Field
          className={css.contactFormInput}
          type="email"
          name="email"
          id={emailId}
        //   placeholder=""
        />
        <ErrorMessage name="email" component="span" />


        <label className={css.contactFormLabel} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.contactFormInput}
          type="password"
          name="password"
          id={passwordId}
        //   placeholder="password"
        />
        <ErrorMessage name="password" component="span" />


        <button className={css.userFormButton} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}