import styles from './shared-cookies.module.css';

/* eslint-disable-next-line */
export interface SharedCookiesProps {}

export function SharedCookies(props: SharedCookiesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedCookies!</h1>
    </div>
  );
}

export default SharedCookies;
