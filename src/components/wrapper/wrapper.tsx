import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Topnav from '../topnav/topnav';
import Sidebar from '../sidebar/sidebar';

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <Container className="wrapper" fluid>
      <Topnav />

      <Row className="h-100">
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col className="contents">{children}</Col>
      </Row>
    </Container>
  );
}

export default Wrapper;
