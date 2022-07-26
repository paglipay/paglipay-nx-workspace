import styles from './dtable.module.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface DTableProps {}

export function DTable(props: DTableProps) {
  const columns = [
    {
      field: 'code',
      headerName: 'code',
    },
    {
      field: 'componentType',
      headerName: 'componentType',
    },
    {
      field: 'props',
      headerName: 'props',
    },
  ];

  const list = [
    {
      code: 'dt',
      componentType: 'DTable',
      props: {
        title: 'DTable',
      },
    },
    {
      code: 'ph',
      componentType: 'CardPlaceholder',
      props: {
        title: 'CardPlaceholderProps',
      },
    },
    {
      code: 'a',
      componentType: 'AggrigateRating',
      props: {
        title: 'AggrigateRating',
      },
    },
    {
      code: 'd',
      componentType: 'DFormik',
      props: {
        title: 'CardPlaceholderProps',
        fieldList: [
          {
            name: 'firstName',
            type: 'text',
          },
          {
            name: 'lastName',
            type: 'text',
          },
          {
            name: 'email',
            type: 'text',
          },
        ],
      },
    },
    {
      code: 'd2',
      componentType: 'DFormik',
      props: {
        title: 'CardPlaceholderProps',
        fieldList: [
          { name: 'code', type: 'text' },
          { name: 'componentType', type: 'text' },
          { name: 'props', type: 'text' },
        ],
      },
    },
    {
      code: 'k',
      componentType: 'ProductCrousel',
      props: {
        cols: [12],
      },
    },
    {
      code: 'p',
      componentType: 'ProductPurchaseCard',
      props: {
        product: { id: '100', price: 12.99, description: 'thing1' },
        title: 'My Product',
      },
    },
    {
      code: 'o',
      componentType: 'ProductPurchaseCard',
      props: {
        product: { id: '101', price: 11.99, description: 'thing2' },
        title: 'My Product 2',
      },
    },
    {
      code: 'i',
      componentType: 'ProductImages',
      // props: {
      //     title: "one"
      // },
    },
    {
      code: 'c',
      componentType: 'Cart',
      props: {
        product: { id: '101', price: 11.99, description: 'thing2' },
        title: 'My Product 2',
      },
    },
    {
      code: '5',
      componentType: 'ProductReviewCard',
      props: {
        title: 'I Love It! Five Stars',
        rating: 5,
      },
    },
    {
      code: '4',
      componentType: 'ProductReviewCard',
      props: {
        title: '4',
        rating: 4,
      },
    },
    {
      code: '3',
      componentType: 'ProductReviewCard',
      props: {
        title: '3',
        rating: 3,
      },
    },
  ];
  return (
    <div className={styles['container']}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.map((c) => (
              <th>{c.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list
            ? list.map((e, i) => {
                return (
                  <tr key={i}>
                    {columns.map((c, i) => {     
                      type ObjectKey = keyof typeof e;
                      const c_field = c.field as ObjectKey;
                      const e_c_field: string = e[c_field] as string;
                      return <td>{JSON.stringify(e_c_field)}</td>;
                    })}
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </div>
  );
}

export default DTable;
