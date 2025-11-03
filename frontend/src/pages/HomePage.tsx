import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to ReactViteApp</h1>
          <p className="text-lg text-gray-600 mb-5">
            This is a starter template for React with Vite, TypeScript, TailwindCSS, and Bootstrap 5.
          </p>
          <Button variant="primary" size="lg" className="px-6 py-3 rounded-lg shadow-lg">
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
