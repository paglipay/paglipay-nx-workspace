import Layout from '../layout/layout';
import styles from './three-column-card.module.css';
import * as Yup from 'yup';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  selectDLayout,
  dlayoutAsync,
} from '../../features/dlayout/dlayoutSlice';

/* eslint-disable-next-line */
export interface ThreeColumnCardProps {
  jsonData: any[];
  sections: any[];
}

export function ThreeColumnCard(props: ThreeColumnCardProps) {
  const { sections, jsonData } = useAppSelector(selectDLayout);
  const dispatch = useAppDispatch();
  console.log('redux sections: ', sections);
  console.log('redux jsonData: ', jsonData);
  return (
    <>
      {' '}
      <button
        className={styles['asyncButton']}
        onClick={() => dispatch(dlayoutAsync(1))}
      >
        Add Async
      </button>
      <Layout
        jsonData={jsonData}
        // jsonData={[
        //   {
        //     code: 'a',
        //     componentType: 'AggrigateRating',
        //     props: {
        //       title: 'AggrigateRating',
        //     },
        //   },
        //   {
        //     code: 'd',
        //     componentType: 'DFormik',
        //     props: {
        //       title: 'CardPlaceholderProps',
        //       validationSchema: Yup.object({
        //         firstName: Yup.string()
        //           .max(15, 'Must be 15 characters or less')
        //           .required(),
        //         lastName: Yup.string()
        //           .max(15, 'Must be 15 characters or less')
        //           .required(),
        //         email: Yup.string().required(),
        //       }),
        //       fieldList: [
        //         {
        //           name: 'firstName',
        //           type: 'text',
        //         },
        //         {
        //           name: 'lastName',
        //           type: 'text',
        //         },
        //         {
        //           name: 'email',
        //           type: 'text',
        //         },
        //       ],
        //     },
        //   },
        //   {
        //     code: 'd2',
        //     componentType: 'DFormik',
        //     props: {
        //       title: 'CardPlaceholderProps',
        //       validationSchema: Yup.object({
        //         code: Yup.string().required(),
        //         componentType: Yup.string().required(),
        //         props: Yup.string().required(),
        //       }),
        //       fieldList: [
        //         { name: 'code', type: 'text' },
        //         { name: 'componentType', type: 'text' },
        //         { name: 'props', type: 'text' },
        //       ],
        //     },
        //   },
        //   {
        //     code: 'k',
        //     componentType: 'ProductCrousel',
        //     props: {
        //       cols: [12],
        //     },
        //   },
        //   {
        //     code: 'p',
        //     componentType: 'ProductPurchaseCard',
        //     props: {
        //       product: { id: '100', price: 12.99, description: 'thing1' },
        //       title: 'My Product',
        //     },
        //   },
        //   {
        //     code: 'o',
        //     componentType: 'ProductPurchaseCard',
        //     props: {
        //       product: { id: '101', price: 11.99, description: 'thing2' },
        //       title: 'My Product 2',
        //     },
        //   },
        //   {
        //     code: 'i',
        //     componentType: 'ProductImages',
        //     // props: {
        //     //     title: "one"
        //     // },
        //   },
        //   {
        //     code: 'c',
        //     componentType: 'Cart',
        //     props: {
        //       product: { id: '101', price: 11.99, description: 'thing2' },
        //       title: 'My Product 2',
        //     },
        //   },
        //   {
        //     code: '5',
        //     componentType: 'ProductReviewCard',
        //     props: {
        //       title: 'I Love It! Five Stars',
        //       rating: 5,
        //     },
        //   },
        //   {
        //     code: '4',
        //     componentType: 'ProductReviewCard',
        //     props: {
        //       title: '4',
        //       rating: 4,
        //     },
        //   },
        //   {
        //     code: '3',
        //     componentType: 'ProductReviewCard',
        //     props: {
        //       title: '3',
        //       rating: 3,
        //     },
        //   },
        // ]}
        sections={sections}
        // sections={[
        //   {
        //     title: 'Section One',
        //     fluid: true,
        //     cols: ['z'],
        //     featureTypesArry: ['k'],
        //   },
        //   {
        //     title: 'Section Title',
        //     fluid: true,
        //     cols: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
        //     featureTypesArry: [
        //       'i',
        //       'i',
        //       'd2',
        //       'd',
        //       '5',
        //       '5',
        //       '5',
        //       'a',
        //       'p',
        //       'p',
        //       'o',
        //       'c',
        //     ],
        //   },
        //   {
        //     title: 'Section Two',
        //     fluid: false,
        //     cols: ['4', '4', '4', '4', '4', '4'],
        //     featureTypesArry: ['i', 'i', 'i', 'p', 'o', 'c'],
        //   },
        // ]}
      />
    </>
  );
}

export default ThreeColumnCard;
