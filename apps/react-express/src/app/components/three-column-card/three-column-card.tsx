import Layout from '../layout/layout';
import styles from './three-column-card.module.css';

/* eslint-disable-next-line */
export interface ThreeColumnCardProps {
  jsonData: any[];
  sections: any[];
}

export function ThreeColumnCard(props: ThreeColumnCardProps) {
  return (
    <Layout
      jsonData={[
        {
          code: 'a',
          componentType: 'CardPlaceholder',
          props: {
            title: 'CardPlaceholderProps',
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
      ]}
      sections={[
        {
          title: 'Section One',
          fluid: true,
          cols: ['z'],
          featureTypesArry: ['k'],
        },
        {
          title: 'Section One',
          fluid: false,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['4', '5', '3'],
        },
        {
          title: 'Section Two',
          fluid: false,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['p', 'o'],
        },
      ]}
    />
  );
}

export default ThreeColumnCard;
