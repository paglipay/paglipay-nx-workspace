import React, { useEffect, useState } from 'react';
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
import { Route, Routes, Link } from 'react-router-dom';

import { CodelabListsDataAccess } from '@create-nx-workspace/codelab-lists/data-access';

// import { dlayoutActions } from './features/dlayout/dlayout.slice'
import { useSelector } from 'react-redux';
import { Counter } from './features/counter/Counter';
import { useAppSelector, useAppDispatch } from './hooks';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  layoutAsync,
  incrementIfOdd,
  selectCount,
  selectLayout
} from './features/dlayout/dlayout.slice';

export const App = () => {
  const layout = useAppSelector(selectLayout);
  const count = useAppSelector(selectCount);
  console.log('layout: ', layout)
  const dispatch = useAppDispatch();
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  // console.log('user', user)
  return (
    <>
      <nav className="navbar navbar-default">
        <div role="navigation" className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/data-access">CodelabListsDataAccess</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <button onClick={() => dlayoutActions.add({id:0, sections:[], jsonData:[]})} >Add</button> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/data-access" element={<CodelabListsDataAccess />} />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
      <Badge bg="success">{m.message}</Badge>
      <h1>Welcome react-express!</h1>

      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(layoutAsync(1));
        }}
      >
        Layout
      </button>
      <div style={{ textAlign: 'center' }}>
        <Counter />
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
          sections={layout}
        />
        <FourColumnCard />
        {/* <Layout /> */}

        {/* <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        /> */}
      </div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
    </>
  );
};

export default App;
