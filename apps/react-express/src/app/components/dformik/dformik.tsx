import { useState, useRef } from 'react';
import styles from './dformik.module.css';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { Form, Card, Button } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks';
import { add } from '../../features/dlayout/dlayoutSlice';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '../../features/counter/counterSlice';
/* eslint-disable-next-line */
export interface DFormikProps {
  title: string;
  fieldList: any[];
  validationSchema: any;
  onSubmit: any;
}
DFormik.defaultProps = {
  fieldList: [],
  onSubmit: (values: any) => {
    alert(JSON.stringify(values, null, 2));
  },
};
export function DFormik(props: DFormikProps) {
  // const fieldList = props.fieldList;

  const dispatch = useAppDispatch();
  const [fieldList, setFieldList] = useState(props.fieldList);

  const initialValues = fieldList.reduce((acc: any, curr: any, i: any) => {
    acc[curr.name] = '';
    return acc;
  }, {});

  const validationSchema = props.validationSchema;
  const onSubmit = (values: any) => {
    if ('featureTypesArry' in values) {
      dispatch(add(values));
    } else {
      dispatch(increment());
    }
    // alert(JSON.stringify(values, null, 2));
  };

  console.log('initialValues:', initialValues);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
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
        </Form>
      </Card.Body>
    </Card>
  );
}

export default DFormik;
