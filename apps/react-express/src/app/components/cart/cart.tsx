import styles from './product-purchase-card.module.css';
import { Button, Card } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCart,
} from '../../features/cart/cartSlice';

/* eslint-disable-next-line */
export interface CartProps {
  product: any;
  title: string;
}

Cart.defaultProps = {
  product: { id: '000', price: 100.0, description: 'thing' },
  title: 'Default Title',
};

export function Cart(props: CartProps) {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  return (
    <Card style={{ textAlign: 'left', padding: '10px'}}>
      <Card.Body>
        <span>
          <h1>Total: ${`${cart}`}</h1>
        </span>
        <span style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
          <h5>Unknown</h5>
        </span>
        <br />
        <Button onClick={() => dispatch(incrementAsync(props.product))}>
          Check Out
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
      </Card.Body>
    </Card>
  );
}

export default Cart;
