import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'Wrong Fullname')
    .required('Full name is required'),
  email: Yup.string()
    .matches(
      /^(?!-)[\w.-]{2,}@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/u,
      'Wrong Email'
    )
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[\d\s()+-]+$/, 'Wrong Phone')
    .required('Phone is required'),
  message: Yup.string(),
});
