import styles from './product-crousel.module.css';
import React, { useState } from 'react';
import { Col, Row, Container, Image, Card, Carousel } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface ProductCrouselProps {
  cols: string[];
}
ProductCarousel.defaultProps = {
  cols: ['z'],
};
export function ProductCarousel(props: ProductCrouselProps) {
  const pics = [
    'cellphone',
    'shirt',
    'shoes',
    'drone',
    'scooter',
    'pants',
    'travel',
    'calm',
    'javascript',
  ];
  const [currentPic, setCurrentPic] = useState(
    Math.floor(Math.random() * (pics.length + 1))
  );
  const randNum = Math.floor(Math.random() * (pics.length - 2));
  return (
    <Carousel>
      {pics.map((e, i) => {
        return (
          <Carousel.Item key={`p-car-itm-${i}`}>
            <Container fluid>
              <Row>
                {props.cols.map((e: any, i: any) => {
                  const randNum = Math.floor(Math.random() * (pics.length - 2));
                  return (
                    <Col key={`imc2-${i}`} lg={e}>
                      <Card key={`imca2-${i}`} style={{ height: '100%' }}>
                        <Image
                          // onClick={() => setCurrentPic(randNum + i)}
                          key={`im2-${i}`}
                          src={`https://source.unsplash.com/1600x400/?${
                            pics[randNum + i]
                          }`}
                          alt={`https://source.unsplash.com/1600x400/?${
                            pics[randNum + i]
                          }`}
                        />
                        {/* <Card.Body>
            <Card.Title></Card.Title>
          </Card.Body> */}
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
            {/* <Carousel.Caption>
                            <h3>{e}</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ProductCarousel;
