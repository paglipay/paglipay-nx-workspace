import styles from './dserver-simple-table.module.css';
import { ServerSimpleTableComponent } from 'reactjs-simple-table';
/* eslint-disable-next-line */
export interface DServerSimpleTableProps {}

export function DServerSimpleTable(props: DServerSimpleTableProps) {
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
      <h1>Welcome to DServerSimpleTable!</h1>
      <ServerSimpleTableComponent
        columns={columns}
        list={list}
        onGetData={tableData}
        total={10}
        serverSideFiltering={false}
      />
    </div>
  );
}

export default DServerSimpleTable;
