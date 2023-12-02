import React from 'react';
import { Formik, ErrorMessage, FormikProps } from 'formik';

import { FormLayout, Label, Input } from './ContactForm.styled';
import { validationSchema } from './validationSchema';
import TextButton from '../../shared/TextButton';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

type TFormValue = typeof initialValues;

const ContactForm: React.FC = () => {
  const handleSubmit = (values: TFormValue) => {
    console.log('Form submitted:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, handleBlur, handleChange }: FormikProps<TFormValue>) => (
        <FormLayout>
          <Label htmlFor="fullName">
            *Full Name:
            <Input
              className={errors.fullName ? 'invalid' : ''}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="John Rosie"
              type="text"
              id="fullName"
              name="fullName"
            />
            <ErrorMessage name="fullName" component="p" />
          </Label>

          <Label htmlFor="email">
            *E-mail:
            <Input
              className={errors.email ? 'invalid' : ''}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="johnrosie@gmail.com"
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage name="email" component="p" />
          </Label>

          <Label htmlFor="phone">
            *Phone:
            <Input
              className={errors.phone ? 'invalid' : ''}
              onBlur={handleBlur}
              onChange={handleChange}
              inputMode="numeric"
              placeholder="380961234567"
              type="number"
              id="phone"
              name="phone"
            />
            <ErrorMessage name="phone" component="p" />
          </Label>

          <Label htmlFor="message">
            Message
            <Input
              onChange={handleChange}
              placeholder="Your message"
              as="textarea"
              id="message"
              name="message"
            />
          </Label>
          <TextButton text="Send" />
        </FormLayout>
      )}
    </Formik>
  );
};

export default ContactForm;
