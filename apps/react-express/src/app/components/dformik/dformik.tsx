import { useState, useRef } from 'react';
import styles from './dformik.module.css';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { Form, Card, Button } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface DFormikProps {
  title: string;
  fieldList: any[];
  validationSchema: any;
}
DFormik.defaultProps = {
  fieldList: [],
};
export function DFormik(props: DFormikProps) {
  // const fieldList = props.fieldList;

  const [fieldList, setFieldList] = useState(props.fieldList);
  // const inputElement = useRef();
  // const inputElement2 = useRef();
  // const initialValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  // };

  const initialValues = fieldList.reduce((acc: any, curr: any, i: any) => {
    acc[curr.name] = '';
    return acc;
  }, {});

  const validationSchema = props.validationSchema;

  console.log('initialValues:', initialValues);

  const formik = useFormik({
    initialValues,
    validationSchema,
    // validationSchema: Yup.object({
    //   firstName: Yup.string()
    //     .max(15, 'Must be 15 characters or less')
    //     .required(),
    //   lastName: Yup.string()
    //     .max(15, 'Must be 15 characters or less')
    //     .required(),
    //   email: Yup.string().required(),
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
    n: e.name,
    t: e.type,
    f: formik.values[e.name],
    errors: formik.errors[e.name],
    touched: formik.touched[e.name],
  }));

  console.log('formikObjs:', formikObjs);

  return (
    <Card className={styles['container']}>
      <Card.Body style={{ textAlign: 'left', padding: '10px', margin: '10px' }}>
        <h2>Welcome to DFormik!</h2>
        {/* <input type="text" name="name" ref={inputElement} />
        <input type="text" name="type" ref={inputElement2} />
        <Button
          onClick={() =>
            setFieldList([
              ...fieldList,
              {
                name: inputElement.current.value,
                type: inputElement2.current.value,
              },
            ])
          }
        >
          Add
        </Button> */}
        <Form onSubmit={formik.handleSubmit}>
          {formikObjs.map((e) => (
            <Form.Group
              className="mb-3"
              // controlId={`formBasic${e.n}`}
            >
              <Form.Label>{`${e.n}`}</Form.Label>
              {e.t === 'textarea' ? (
                <Form.Control
                  id={`${e.n}`}
                  name={`${e.n}`}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  onChange={formik.handleChange}
                  value={e.f}
                  onBlur={formik.handleBlur}
                />
              ) : (
                <Form.Control
                  id={`${e.n}`}
                  name={`${e.n}`}
                  type={e.n === 'email' ? 'email' : 'text'}
                  placeholder={`Enter ${e.n}`}
                  onChange={formik.handleChange}
                  value={e.f}
                  onBlur={formik.handleBlur}
                />
              )}
              {e.touched && e.errors ? (
                <Form.Text className="text-muted">
                  <>
                    {e.errors}
                    {/* {JSON.stringify(e)} */}
                  </>
                </Form.Text>
              ) : null}
            </Form.Group>
          ))}

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
