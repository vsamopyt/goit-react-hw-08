import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const contacFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'too short')
    .max(100, 'too Long')
    .required('Required'),
  email: Yup.string().email('must be a valid email').required('Required'),
  password: Yup.string()
    .matches('(?=.*[0-9])', 'must have at least one number')
    .required('Required'),
});

export default function RegistrationForm() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(register(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contacFormSchema}
    >
      <Form className={css.contactFormWraper}>
        <label className={css.contactFormLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage name="name" component="span" />
        <label className={css.contactFormLabel} htmlFor={emailId}>
          Email
        </label>
        <Field
          className={css.contactFormInput}
          type="email"
          name="email"
          id={emailId}
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
        />
        <ErrorMessage name="password" component="span" />

        <button className={css.userFormButton} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}
