import styles from './dformik.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Card, Button } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface DFormikProps {}

export function DFormik(props: DFormikProps) {
  const fieldList = ['firstName', 'lastName', 'email'];

  // const initialValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  // };

  const initialValues = fieldList.reduce((acc: any, curr: any, i: any) => {
    acc[curr] = '';
    return acc;
  }, {});

  console.log('initialValues:', initialValues);

  const formik = useFormik({
    initialValues,
    // validationSchema: Yup.object({
    //   firstName: Yup.string()
    //     .max(15, 'Must be 15 characters or less')
    //     .required(),
    //   lastName: Yup.string()
    //     .max(15, 'Must be 15 characters or less')
    //     .required(),
    //   email: Yup.string().max(15, 'Must be 15 characters or less').required(),
    // }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const formikObjs = [
  //   {
  //     n: 'firstName',
  //     f: formik.values['firstName'],
  //     errors: formik.errors['firstName'],
  //   },
  //   {
  //     n: 'lastName',
  //     f: formik.values['lastName'],
  //     errors: formik.errors['lastName'],
  //   },
  //   { n: 'email', f: formik.values['email'], errors: formik.errors['email'] },
  // ];

  const formikObjs = fieldList.map((e) => ({
    n: e,
    f: formik.values[e],
    errors: formik.errors[e],
  }));

  console.log('formikObjs:', formikObjs);

  return (
    <Card className={styles['container']}>
      <Card.Body style={{ textAlign: 'left', padding: '10px', margin: '10px' }}>
        <h2>Welcome to DFormik!</h2>
        <Form onSubmit={formik.handleSubmit}>
          {formikObjs.map((e) => (
            <Form.Group className="mb-3" controlId={`formBasic${e.n}`}>
              <Form.Label>{`${e.n}`}</Form.Label>
              <Form.Control
                // id={`${e.n}`}
                name={`${e.n}`}
                type={e.n === 'email' ? 'email' : 'text'}
                placeholder={`Enter ${e.n}`}
                onChange={formik.handleChange}
                value={e.f}
                onBlur={formik.handleBlur}
              />
              {e.errors ? (
                <Form.Text className="text-muted">{e.errors}</Form.Text>
              ) : null}
            </Form.Group>
          ))}

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> */}
          <Button type="submit">Send</Button>
          {/* <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          /> */}

          {/* <button type="submit">Submit</button> */}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default DFormik;
