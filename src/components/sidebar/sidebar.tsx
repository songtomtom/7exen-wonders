import React from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';

function Sidebar() {
  return (
    <Container className="sidebar">
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>
          <i className="fas fa-th-list" />
          Counting Victory Points
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          <i className="fas fa-trophy" />
          Season Ranking
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
}

export default Sidebar;
