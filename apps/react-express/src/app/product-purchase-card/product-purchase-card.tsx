import styles from './product-purchase-card.module.css';
import { Button } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCart,
} from '../features/cart/cartSlice';

/* eslint-disable-next-line */
export interface ProductPurchaseCardProps {
  product: any;
  title: string;
}

ProductPurchaseCard.defaultProps = {
  product: { id: '000', price: 100.0, description:'thing' },
  title: 'Default Title',
};

export function ProductPurchaseCard(props: ProductPurchaseCardProps) {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  return (
    <div style={{ textAlign: 'left' }}>
      <span>
        <h1>$199.99</h1>
      </span>
      <span style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
        <h5>Unknown</h5>
      </span>
      <br />

      <br />
      <Button onClick={() => dispatch(incrementByAmount(props.product))}>
        Add to Cart
      </Button>
      <br />
      <br />
      <Button onClick={() => console.log('Buy Now: ', props.product)}>
        Buy Now
      </Button>
      <br />
      <br />
      <h5>
        <strong>{props.title}</strong>
      </h5>
      <p style={{ fontSize: 12 }}>
        Reviewed in the United States on April 29, 2021
        <br />
        Ships from DartCart
      </p>
      <p>Return Policy: Eligible for Return, Refund or Replacement</p>
      <p>Support: Free DartCart tech</p>
    </div>
  );
}

export default ProductPurchaseCard;
