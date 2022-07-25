import styles from './dtable.module.css';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface DTableProps {}

export function DTable(props: DTableProps) {
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
    },
    {
      field: 'number',
      headerName: 'Amount',
    },
  ];

  const list = [
    { title: 'Michael', number: 1 },
    { title: 'Lindsay', number: 10 },
    { title: 'Tobias', number: 6 },
    { title: 'Byron', number: 3 },
    { title: 'George', number: 1 },
    { title: 'Rachel', number: 10 },
    { title: 'Lawson', number: 6 },
    { title: 'Ferguson', number: 3 },
    { title: 'Funke', number: 1 },
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
                    {columns.map((c) => (
                      <td>{e[c.field]}</td>
                    ))}
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
