import React, { forwardRef } from 'react';
/* eslint-disable-next-line */
export interface SafeframeProps {
  id:string;
}

export const Safeframe = forwardRef<HTMLIFrameElement, SafeframeProps>(({ id }: SafeframeProps, forwardedRef) => {
  return (
      <iframe
        ref={forwardedRef}
        title={id}
        id={id}
        src="https://paglipay.github.io/iframe-post-messages/frame3.htm"
        frameBorder="1"
        style={{ display: 'block', height: '200px', border: '1px solid black' }}
      ></iframe>
  );
});

export default Safeframe;
