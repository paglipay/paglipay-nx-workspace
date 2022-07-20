import Layout from '../layout/layout';
import styles from './four-column-card.module.css';

/* eslint-disable-next-line */
export interface FourColumnCardProps {}

export function FourColumnCard(props: FourColumnCardProps) {
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
          cols: ['3', '3', '3', '3'],
          featureTypesArry: ['a', 'a', 'a', 'a'],
        },
        {
          title: 'Section Title',
          fluid: false,
          cols: ['4', '4', '4', '4', '4', '4'],
          featureTypesArry: ['a', 'a'],
        },
      ]}
    />
  );
}

export default FourColumnCard;
