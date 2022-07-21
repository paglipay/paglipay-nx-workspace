import styles from './layout-render.module.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import DLayout from '../dlayout/dlayout';

import CardPlaceholder from '../card-placeholder/card-placeholder';
/* eslint-disable-next-line */
export interface LayoutRenderProps {
  fluid: boolean;
  // features: any[];
  cols: string[];
  components: any;
  featureTypesArry: string[];
  jsonData: any[];
}

LayoutRender.defaultProps = {
  fluid: true,
  cols: ['4', '4', '4'],
  // features: [
  //   <CardPlaceholder/>,
  //   <CardPlaceholder/>,
  //   <CardPlaceholder/>
  // ],
  components: {
    CardPlaceholder: <CardPlaceholder />,
  },
  featureTypesArry: ['a', 'a', 'a'],
  jsonData: [
    {
      code: 'a',
      componentType: 'ProductReviewCard',
      props: {
        title: 'ProductReviewCard',
      },
    },
  ],
};

export function LayoutRender(props: LayoutRenderProps) {
  const res = props.jsonData.reduce(
    (acc: any, curr: any, i: any) => (
      (acc[curr.code] = React.createElement(
        props.components[props.jsonData[i].componentType],
        props.jsonData[i].props
      )),
      acc
    ),
    {}
  );

  // console.log('props.jsonData: ', props.jsonData)
  // console.log('res: ', res)
  // const features = [
  //   React.createElement(
  //     // eslint-disable-next-line @typescript-eslint/no-var-requires
  //     require('../ProductReviewCard/ProductReviewCard').default,
  //     {}
  //   ),
  //   <CardPlaceholder />,
  //   <CardPlaceholder />,
  //   <CardPlaceholder />,
  // ];

  const features = props.featureTypesArry.map((e) => res[e]);

  return (
    <Container
      fluid={props.fluid}
      // style={{ backgroundColor: 'white', padding: '25px', marginBottom: '25px' }}
    >
      <DLayout cols={props.cols} features={features} />
    </Container>
  );
}

export default LayoutRender;
