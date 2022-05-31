import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import { Message } from '@create-nx-workspace/api-interfaces';
import ProductPurchaseCard from './product-purchase-card/product-purchase-card';
import AggrigateRating from './components/aggrigate-rating/aggrigate-rating';
import ProductCarousel from './components/product-crousel/product-crousel';
import ProductImages from './components/product-images/product-images';
import ProductReviewCard from './components/ProductReviewCard/ProductReviewCard';
import DLayout from './components/dlayout/dlayout';
import LayoutRender from './components/layout-render/layout-render';
import { Container } from 'react-bootstrap';
import Layout from './components/layout/layout';
import ThreeColumnCard from './components/three-column-card/three-column-card';
import FourColumnCard from './components/four-column-card/four-column-card';
import { Badge } from 'react-bootstrap';
export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <Badge bg="success">{m.message}</Badge>
      <h1>Welcome react-express!</h1>
      <div style={{ textAlign: 'center' }}>
        <ThreeColumnCard
          jsonData={[
            {
              code: 'a',
              componentType: 'CardPlaceholder',
              props: {
                title: 'CardPlaceholderProps',
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
          ]}
          sections={[
            {
              title: 'Section Title',
              fluid: true,
              cols: ['4', '4', '4', '4', '4', '4'],
              featureTypesArry: ['a', 'a', 'a'],
            },
            {
              title: 'Section Title',
              fluid: false,
              cols: ['4', '4', '4', '4', '4', '4'],
              featureTypesArry: ['a'],
            },
          ]}
        />
        <FourColumnCard />
        {/* <Layout /> */}

        {/* <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        /> */}
      </div>
    </>
  );
};

export default App;
