import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Topnav from '../topnav/topnav';
import Sidebar from '../sidebar/sidebar';

interface WrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="wrapper">
      <Topnav />

      <Container fluid>
        <Row>
          <Col className="m-0 p-0" sm={3}>
            <Sidebar />
          </Col>
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Wrapper;
