import styles from './safeframe.module.css';
import React, { forwardRef } from 'react';
/* eslint-disable-next-line */
export interface SafeframeProps {
  id:string;
}

export const Safeframe = forwardRef<HTMLIFrameElement, SafeframeProps>(({ id }: SafeframeProps, forwardedRef) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Safeframe!</h1>
      <iframe
        ref={forwardedRef}
        title={id}
        id={id}
        src="https://paglipay.github.io/iframe-post-messages/frame3.htm"
        frameBorder="1"
        style={{ display: 'block', height: '200px', border: '1px solid black' }}
      ></iframe>
    </div>
  );
});

export default Safeframe;
