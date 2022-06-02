import Layout from '../layout/layout';
import styles from './three-column-card.module.css';

/* eslint-disable-next-line */
export interface ThreeColumnCardProps {
  jsonData:any[];
  sections:any[];
}

export function ThreeColumnCard(props: ThreeColumnCardProps) {
  return (
    <Layout
      // jsonData={[
      //   {
      //     code: 'a',
      //     componentType: 'CardPlaceholder',
      //     props: {
      //       title: 'CardPlaceholderProps',
      //     },
      //   },
      //   {
      //     code: 'p',
      //     componentType: 'ProductPurchaseCard',
      //     props: {
      //       title: 'ProductPurchaseCard',
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
      // ]}
      sections={[
        {
          title: 'Section One',
          fluid: true,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['a', 'a','a'],
        },
        {
          title: 'Section Two',
          fluid: false,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['p'],
        },
      ]}
    />
  );
}

export default ThreeColumnCard;
