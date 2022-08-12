import styles from './safeframe-cp.module.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Button, Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import { BsFillPlayFill, BsStopFill } from 'react-icons/bs';
import Safeframe from '../safeframe/safeframe';
/* eslint-disable-next-line */
export interface SafeframeCPProps {
  id: string;
}

export function SafeframeCP({ id }: SafeframeCPProps) {
  const getItems = useCallback(() => {
    return ['0', '1', '2'];
  }, []);
  // const getItems = () => {
  //   return [...Array(3).keys()];
  // };
  // const [recvMsg, setRecvMsg] = useState([]);
  const [items, setItems] = useState(['0', '1', '2']);

  const sfRef = useRef<HTMLIFrameElement>(null);
  const handleMessage = useCallback(
    (e: { data: { id: string; action: string; }; }) => {
      // console.log("Safeframe handleMessage getItems: ", id);
      // setRecvMsg([...recvMsg, JSON.stringify(e.data)]);
      if (e.data.id === id) {
        console.log('Safeframe handleMessage getItems e.data.id: ', id, e);
        setItems(getItems);
        // setRecvMsg([...recvMsg, JSON.stringify(e.data)]);
        sfRef.current?.contentWindow?.postMessage(e.data, '*');
      } else if (e.data?.action === 'broadcast') {
        setItems(getItems);
        // setRecvMsg([...recvMsg, JSON.stringify(e.data)]);
      }
    },
    [getItems, id]
  );

  useEffect(() => {
    console.log('Safeframe useEffect handleMessage: ', id);
    window.addEventListener('message', handleMessage, false);
    return () => {
      console.log('Safeframe useEffect handleMessage return: ', id);
      window.removeEventListener('message', handleMessage);
    };
  }, [handleMessage, id]);

  return (
    <div className={styles['container']}>
      <h1>Welcome to SafeframeCP!</h1>
      <Card style={{ marginTop: '15px' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Safeframe ref={sfRef} id={id} />
        <Card.Body>
          <Card.Title>Safeframe {'id'}</Card.Title>
          <Card.Text>
            <Button
              onClick={() => window.postMessage({ action: 'broadcast' }, '*')}
              variant="primary"
            >
              Broadcast
            </Button>
          </Card.Text>
          {/* <ul>
          {recvMsg.map((e, i) => (
            <li key={`rc-${i}`}>{JSON.stringify(e)}</li>
          ))}
        </ul> */}
          <Container fluid={true}>
            <Row>
              {items.map((e, i) => (
                <Col md={3} key={`col-sf-${id}-i-${i}`}>
                  <Card.Title>SF{i}</Card.Title>
                  <Button
                    key={`play-sf-${id}-i-${i}`}
                    style={{ margin: '5px' }}
                    onClick={() =>
                      window.postMessage(
                        { id: e, action: { type: 'playVid' } },
                        '*'
                      )
                    }
                    variant="primary"
                  >
                    <BsFillPlayFill />
                  </Button>
                  <Button
                    key={`stop-i-${i}`}
                    style={{ margin: '5px' }}
                    onClick={() =>
                      window.postMessage(
                        { id: e, action: { type: 'clearInterval' } },
                        '*'
                      )
                    }
                    variant="primary"
                  >
                    <BsStopFill />
                  </Button>
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SafeframeCP;
