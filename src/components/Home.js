import React from "react";
import useFetch from '../../useFetch'; // Assuming you have a useFetch hook to fetch data.
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const { data: products, isPending, errorMsg, haveError } = useFetch("http://localhost:8000/products");

  return (
    <Container>
      <h1 className="text-center my-4">Our Products</h1>
      {isPending && <Spinner animation="border" variant="primary" />}
      {haveError && <p>{errorMsg}</p>}
      <Row>
        {products && products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <h5>${product.price}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
