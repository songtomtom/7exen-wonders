import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function Sidebar() {
  return (
    <div className="sidebar">
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
    </div>
  );
}

export default Sidebar;
